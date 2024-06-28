import {createRouter, createWebHistory} from 'vue-router'

import Home from "./../components/Home.vue"
import Vehicles from "./../components/Vehicles.vue"
import About from "./../components/About.vue"
import Contact from "./../components/Contact.vue"
import Favourites from "./../components/Favourites.vue"
const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
        path: '/Vehicles',
        name: 'Vehicles',
        component: Vehicles,
      },
      {
        path: '/About',
        name: 'About',
        component: About,
      },
      {
        path: '/Contact',
        name: 'Contact',
        component: Contact,
      },
      {
        path: '/Favourites',
        name: 'Favourites',
        component: Favourites,
      },
]
const router = createRouter({
  history: createWebHistory(),
  routes, 
})

export default router