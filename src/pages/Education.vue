<template>
  <div
    class="row pl-4 pr-4"
  >  
    <div
      v-for="education in institutions"
      :key="education.institute"
      class="col-sm-12 col-md-4 d-flex justify-content-center"
    >
      <div class="card border-light mt-3" style="width: 100%;">
        <div class="card-header">
          {{ education.period }}
        </div>
        <div class="card-body">
          <h6 class="card-title font-weight-bold">
            {{ education.institute }}
          </h6>
          <p class="card-text" style="color: grey">
            {{ education.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import educationData from '../json/education.json'
export default {
  data () {
    return {
      institutions: educationData
    }
  }
}
</script>