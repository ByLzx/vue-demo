<template>
  <div id="app">
    <app-footer></app-footer>
    <router-view/>
  </div>
</template>

<script>
  import appFooter from '@/components/appFooter'
export default {
  name: "App",
  components:{appFooter},
  data() {
    return {
      
    };
  },
};
</script>

<style>
* {
  /* box-sizing: border-box; */
  margin: 0;
  padding: 0;
  scrollbar-width: none; /*Firefox*/
  -ms-overflow-style: none; /*IE10+*/
}
</style>
