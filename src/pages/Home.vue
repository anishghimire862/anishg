<template>
  <div>
    <div
      class="banner-image"
    >
      <div class="container h-100">
        <div class="row h-100 align-items-center">
          <div class="col-12">
            <p class="font-weight-bold text-monospace">WELCOME. I AM</p>
            <h2 class="font-weight-bold text-monospace">ANISH GHIMIRE</h2>
            <p class="text-monospace pt-1">IT student who aspires to be an IT enthusiast.</p>
            {{ timestamp }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      timestamp: ''
    }
  },
  created () {
    setInterval(this.getNow, 1000)
  },
  methods: {
    getNow: function() {
      const today = new Date();
      const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      const dateTime = date +' '+ time;
      this.timestamp = dateTime;
    }
  }
}
</script>
<style scoped>
.banner-image {
  height: 100vh;
  min-height: 500px;
  background-image: url(../assets/banner-image.jpeg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>