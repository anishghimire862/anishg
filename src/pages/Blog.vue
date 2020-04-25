<template>
  <div>
    <div class="row h-100">
      <div class="col-sm-12 col-md-6 p-0" style="background-color: #fff;">
        <img src="@/assets/blog-image.png" class="img-fluid" width="100%"/>
      </div>
      <div class="col-sm-12 col-md-6 p-0" style="background-color: #fff;">
        <div
          v-for="i in 5"
          :key="i" 
          class="card border border-white pl-5 pr-5 pt-3 pb-0"
          style="max-width: 100%"
        >
          <div class="card-body pb-0">
            <small
              class="font-weight-bold"
            > 
              JANUARY 2015 
              <sup>
                <span class="font-weight-bold"> . </span>
              </sup> 
              <small
                class="font-weight-bold blog-category"
              > 
                POEM
              </small>
            </small>
            <h5 class="card-title font-weight-bold mb-1">A dark night</h5>
            <p class="card-text blog-content mb-1">
              A dark night that has arrived now 
              A dark night that has arrived now 
              A dark night that has arrived now ...
            </p>
            <span
              class="read-more"
            > 
              READ
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
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