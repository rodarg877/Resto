import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Main
    },
    {
      path: '/menu',
      name: 'menu',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/Contacto.vue')
    },
    {
      path: '/quienesSomos',
      name: 'quienesSomos',
      component: () => import('../views/Contacto.vue')
    },
    {
      path: '/inicioSesion',
      name: 'inicioSesion',
      component: () => import('../views/InicioSesion.vue')
    },
    {
      path: '/registro',
      name: 'registro',
      component: () => import('../views/Registro.vue')
    },

  ]
})

export default router
