import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const Home = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const Food = () => interopDefault(import('..\\pages\\food.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: Home,
    name: "index"
  }],
  routes: [{
    path: "/food",
    component: Food,
    name: "food"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
