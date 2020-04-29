<template>
  <div>
    <div class="row h-100">
      <div class="col-sm-12 col-md-6 p-0" style="background-color: #fff;">
        <img 
          src="@/assets/anish-ghimire.jpg" 
          class="img-fluid" 
          width="100%"
          alt="Anish Ghimire"
        />
      </div>
      <div class="col-sm-12 col-md-6 p-0" style="background-color: #fff;">
        <div
          v-for="blog in blogs"
          :key="blog.title" 
          class="card border border-white pl-5 pr-5 pt-3 pb-0"
          style="max-width: 100%"
        >
          <div class="card-body pb-0">
            <small
              class="font-weight-bold"
            > 
              {{ blog.createdAt }} 
              <sup>
                <span class="font-weight-bold"> . </span>
              </sup> 
              <small
                class="font-weight-bold blog-category"
              > 
                {{ blog.category }}
              </small>
            </small>
            <h5 class="card-title font-weight-bold mb-1">
              {{ blog.title }}
            </h5>
            <p class="card-text blog-content mb-1">
              {{ blog.content }}
            </p>
            <router-link
              :to="`/blog/${blog.title}`"
            >
              <span
                class="read-more"

              > 
                READ
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogData from '../json/blog.json'
export default {
  data () {
    return {
      blogs: blogData
    }
  },
}
</script>
<style scoped>
.blog-category {
  color: #f2b95c;
}
.blog-content {
  color: grey;
}
.read-more {
  color: blue;
}
</style>