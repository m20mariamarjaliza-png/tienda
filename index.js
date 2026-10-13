import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import ItemDetail from '../views/ItemDetail.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/acerca-de', name: 'about', component: About },
  {
    path: '/articulo/:id',
    name: 'item-detail',
    component: ItemDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
