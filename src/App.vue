<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        &lt; anish &frasl;&gt;
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li
            v-for="item in navItems"
            :key="item.title"
            class="nav-item active nav-link"  
          >
            <router-link
              :to="item.link"
              v-slot="{ href, route, navigate, isActive, isExactActive }"
            >
              <span
                :class="[isExactActive && 'router-link-exact-active']"
                :href="href" @click="navigate"
                style="padding-bottom: 5px; padding-left:5px; padding-right: 5px; cursor: pointer"
              >
                {{ item.title }}
              </span>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { title: 'Home', link: '/' },
        { title: 'Blog', link: '/blog' },
        { title: 'Education', link: '/education' },
        { title: 'Projects', link: '/projects' },
      ]
    }
  }
}
</script>
<style scoped>
.router-link-exact-active {
  color: green;
  border-bottom: 5px solid black;
}
</style>