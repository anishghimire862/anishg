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
          class="card border border-white pl-5 pr-5 pt-3 pb-0"
          style="max-width: 100%"
        >
          <div class="card-body pb-0">
            <small
              class="font-weight-bold"
            > 
              {{ blog[0].createdAt }}
              <sup>
                <span class="font-weight-bold"> . </span>
              </sup> 
              <small
                class="font-weight-bold blog-category"
              > 
                {{ blog[0].category }}
              </small>
            </small>
            <h5 class="card-title font-weight-bold mb-1">
              {{ blog[0].title }}
            </h5>
            <p class="card-text blog-content mb-1">
              {{ blog[0].content }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import blogData from '../../json/blog.json'
export default {
  data () {
    return {
      blogs: blogData,
      blog: null,
      title: this.$route.params.title
    }
  },
  mounted () {
    this.getBlog();
  },
  methods: {
    getBlog () {
      this.blog =  this.blogs.filter(blog => blog.title === this.title)
      return this.blog
    }
  }
}
</script>
<style scoped>
.blog-category {
  color: #f2b95c;
}
.blog-content {
  color: grey;
}
</style>