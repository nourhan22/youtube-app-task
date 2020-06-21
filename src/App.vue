<template>
  <div id="app">
   
      <SearchBar/>
      <router-link to="/"></router-link>
      <router-view></router-view>
      
   
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
<script>
import SearchBar from './components/search-bar/search-bar.vue'
// import MainPage from './components/main-page/main-page.vue'
export default {
  data(){
    return{
      list:null
    }
  },
  components:{
   SearchBar,
  //  MainPage
  },
  methods:{
  
  }
  
}
</script>
