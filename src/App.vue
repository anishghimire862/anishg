<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { title: 'Home', link: '/', isActive: true },
        { title: 'Blog', link: '/blog', isActive: false },
        { title: 'Education', link: '/education', isActive: false },
        { title: 'Projects', link: '/projects', isActive: false },
      ]
    }
  }
}
</script>