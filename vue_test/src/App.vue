<template>
  <div id="app">
    <Topbar></Topbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view id="maincontent"/>
    <Footer></Footer>
  </div>
</template>
<script>
// @ is an alias to /src
import Topbar from '@/components/Topbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Topbar,
    Footer
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#maincontent {
  background-color: white;
  height: 100%;
  width: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
