import Vue from 'vue'
import VueRouter from 'vue-router'
import { auth } from '../plugins/firebase'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/DefaultView'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView
      },
      {
        path: '/animais',
        name: 'Animais',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "animais" */ '../views/AnimaisView.vue')
      },
      {
        path: '/perfil',
        name: 'Perfil',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "perfil" */ '../views/PerfilView.vue')
      },
  //    {
  //      path: '/faleconosco',
  //      name: 'Fale Conosco',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
  //      component: () => import(/* webpackChunkName: "faleconosco" */ '../views/FaleConoscoView.vue')
   //   },
      {
        path: '/cachorros',
        name: 'Cachorros',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "cachorros" */ '../views/CachorrosView.vue')
      },
      {
        path: '/gatos',
        name: 'Gatos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "cachorros" */ '../views/GatosView.vue')
      },
      {
        path: '/coelhos',
        name: 'Coelhos',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "coelhos" */ '../views/CoelhosView.vue')
      },
      {
        path: '/passaros',
        name: 'Passaros',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "passaros" */ '../views/PassarosView.vue')
      },
      {
        path: '/outros',
        name: 'Outros',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "outros" */ '../views/OutrosView.vue')
      },
      {
        path: '/cadastro',
        name: 'Cadastro',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "cadastro" */ '../views/CadastrarView.vue')
      },
      {
        path: '/vermais',
        name: 'Ver Mais',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "vermais" */ '../views/VerMaisView.vue')
      },
    ]
  },
  {
    path: '/',
    component: () => import('@/layouts/BlankView'),
    children: [
      {
        path: '/login',
         name: 'Login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth)

  if (requiresAuth && !auth.currentUser) {
      next('/login')
  } else {
    next()
  }
})

export default router
