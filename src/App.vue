<template>
  <div id="app">
    <div id="nav">
    </div>
    <component :is="comp" />
  </div>
</template>

<script>
import About from '@/views/About.vue';
import Home from '@/views/Home.vue';

export default {
  name: 'App',

  components: {
    About,
    Home,
  },

  data() {
    return {
      comp: Home,
    };
  },

  mounted() {
    setInterval(() => {
      this.comp = this.comp === Home
        ? About
        : Home;
    }, 500);
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
