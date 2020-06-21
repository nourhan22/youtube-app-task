import Vue from 'vue'
import VueRouter from 'vue-router'

import VideoDetails from "../components/video-details/video-details.vue";
import MainPage from "../components/main-page/main-page.vue";

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'MainPage',
      component: MainPage 
  
    },
  {
    path: '/VideoDetails/:id',
    name: 'VideoDetails',
    component: VideoDetails ,
    props: true

  }
]

const router = new VueRouter({
  routes
})

export default router
