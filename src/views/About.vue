<template>
  <div class="about">
    <h1>This is an about page</h1>
    <HelloWorld v-for="i in 100" :key="i" msg="prout"/>
  </div>
</template>
<script>
export default {
  name: 'about',

  components: {
    HelloWorld: () => import('@/components/HelloWorld.vue'),
  },

  destroyed() {
    // debugger;
  },
};
</script>
