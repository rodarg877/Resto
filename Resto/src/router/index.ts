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
      component: () => import('../views/Menu.vue')
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('../views/Contacto.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import('../views/Perfil.vue')
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
    {
      path: '/mesa',
      name: 'mesa',
      component: () => import('../views/Mesas.vue')
    },
    {
      path: '/carrito',
      name: 'carrito',
      component: () => import('../views/Carrito.vue')
    },

  ]
})

export default router
