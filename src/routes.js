
import HomePage from './pages/Home.vue'
import BlogPage from './pages/Blog.vue'
import BlogPost from './pages/blog/blog_post.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/blog', component: BlogPage },
  { path: '/blog/:title', component: BlogPost }
];

export default routes;
