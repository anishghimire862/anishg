FROM node:lts-alpine as build-stage
CMD ["yarn"]
CMD ["yarn", "build"]
COPY ./dist/ /app/dist/
COPY package*.json /app/
WORKDIR /app/

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
