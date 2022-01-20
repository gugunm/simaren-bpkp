import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

import store from '../store/index.js'

import { func } from '@/globalFunctions'

// const statusAccessNip = async () => {
//   return await func.isNipAllowToAdd()
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/kap',
    children: [
      {
        path: '/sektor',
        name: 'Sektor',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: 'Index Sektor',
            component: () => import('@/views/modules/sektor/index.vue'),
            meta: { requiresAuth: true, restricted: false },
          },
          {
            path: 'create',
            name: 'Create Sektor',
            component: () => import('@/views/modules/sektor/Create.vue'),
            meta: { requiresAuth: true, restricted: true },
          },
          {
            path: 'update/:idSektor',
            name: 'Update Sektor',
            component: () => import('@/views/modules/sektor/Update.vue'),
            meta: { requiresAuth: true, restricted: true },
            props: true,
          },
        ],
      },
      {
        path: '/tema',
        name: 'Tema',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/modules/tema/index.vue'),
            meta: { requiresAuth: true, restricted: false },
          },
          {
            path: 'create',
            name: 'Create Tema',
            component: () => import('@/views/modules/tema/Create.vue'),
            meta: { requiresAuth: true, restricted: true },
          },
          {
            path: 'update/:idTema',
            name: 'Update Tema',
            component: () => import('@/views/modules/tema/Update.vue'),
            meta: { requiresAuth: true, restricted: true },
            props: true,
          },
        ],
      },
      {
        path: '/topik',
        name: 'Topik',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/modules/topik/index.vue'),
            meta: { requiresAuth: true, restricted: false },
          },
          {
            path: 'create',
            name: 'Create Topik',
            component: () => import('@/views/modules/topik/Create.vue'),
            meta: { requiresAuth: true, restricted: true },
          },
          {
            path: 'update/:idTopik',
            name: 'Update Topik',
            component: () => import('@/views/modules/topik/Update.vue'),
            meta: { requiresAuth: true, restricted: true },
            props: true,
          },
        ],
      },
      {
        path: '/kontributor',
        name: 'Kontributor',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/modules/kontributor/index.vue'),
            meta: { requiresAuth: true, restricted: false },
          },
          {
            path: 'create',
            name: 'Create Kontributor',
            component: () => import('@/views/modules/kontributor/Create.vue'),
            meta: { requiresAuth: true, restricted: true },
          },
          {
            path: 'update/:idKontributor',
            name: 'Update Kontributor',
            component: () => import('@/views/modules/kontributor/Update.vue'),
            meta: { requiresAuth: true, restricted: true },
            props: true,
          },
        ],
      },
      {
        path: '/kap',
        name: 'KAP',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/modules/kap/index.vue'),
            meta: { requiresAuth: true, restricted: false },
          },
          {
            path: 'create',
            name: 'Create KAP',
            component: () => import('@/views/modules/kap/Create.vue'),
            meta: { requiresAuth: true, restricted: true },
          },
          {
            path: 'update/:idKap',
            name: 'Update KAP',
            component: () => import('@/views/modules/kap/Update.vue'),
            meta: { requiresAuth: true, restricted: true },
            props: true,
          },
        ],
      },
      {
        path: '/pkpt',
        name: 'PKPT',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        children: [
          {
            path: '',
            name: '',
            component: () => import('@/views/modules/pkpt/index.vue'),
            meta: { requiresAuth: true, restricted: false },
          },
          {
            path: 'create',
            name: 'Create PKPT',
            component: () => import('@/views/modules/pkpt/Create.vue'),
            meta: { requiresAuth: true, restricted: true },
          },
          {
            path: 'update/:idPkpt',
            name: 'Update PKPT',
            component: () => import('@/views/modules/pkpt/Update.vue'),
            meta: { requiresAuth: true, restricted: true },
            props: true,
          },
        ],
      },
      {
        path: '/export',
        name: 'Export',
        component: () => import('@/views/modules/export/index.vue'),
        meta: { requiresAuth: true },
      },
      /*
      {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('@/views/Dashboard.vue'),
      },
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/views/theme/Colors.vue'),
      },
      {
        path: '/theme/typography',
        name: 'Typography',
        component: () => import('@/views/theme/Typography.vue'),
      },
      {
        path: '/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/base/breadcrumbs',
        children: [
          {
            path: '/base/accordion',
            name: 'Accordion',
            component: () => import('@/views/base/Accordion.vue'),
          },
          {
            path: '/base/breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('@/views/base/Breadcrumbs.vue'),
          },
          {
            path: '/base/cards',
            name: 'Cards',
            component: () => import('@/views/base/Cards.vue'),
          },
          {
            path: '/base/carousels',
            name: 'Carousels',
            component: () => import('@/views/base/Carousels.vue'),
          },
          {
            path: '/base/collapses',
            name: 'Collapses',
            component: () => import('@/views/base/Collapses.vue'),
          },
          {
            path: '/base/list-groups',
            name: 'List Groups',
            component: () => import('@/views/base/ListGroups.vue'),
          },
          {
            path: '/base/navs',
            name: 'Navs',
            component: () => import('@/views/base/Navs.vue'),
          },
          {
            path: '/base/paginations',
            name: 'Paginations',
            component: () => import('@/views/base/Paginations.vue'),
          },
          {
            path: '/base/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/base/Placeholders.vue'),
          },
          {
            path: '/base/popovers',
            name: 'Popovers',
            component: () => import('@/views/base/Popovers.vue'),
          },
          {
            path: '/base/progress',
            name: 'Progress',
            component: () => import('@/views/base/Progress.vue'),
          },
          {
            path: '/base/spinners',
            name: 'Spinners',
            component: () => import('@/views/base/Spinners.vue'),
          },
          {
            path: '/base/tables',
            name: 'Tables',
            component: () => import('@/views/base/Tables.vue'),
          },
          {
            path: '/base/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/base/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Buttons',
            component: () => import('@/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/notifications/Modals.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      }, */
    ],
  },
  /*
  {
    path: '/pages',
    redirect: '/pages/404',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
      {
        path: '404',
        name: 'Page404',
        component: () => import('@/views/pages/Page404'),
      },
      {
        path: '500',
        name: 'Page500',
        component: () => import('@/views/pages/Page500'),
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
  */
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login'),
    meta: { requiresUnauth: true, restricted: false },
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/pages/Page404'),
  },
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

router.beforeEach(async function (to, _, next) {
  if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
    // console.log('TOOO')
    // console.log(to)
    next('/login')
  } else if (to.meta.restricted) {
    // console.log('Restricted User To Add')
    if (await func.isNipAllowToAdd()) {
      next()
    } else {
      next('/kap')
    }
  } else {
    next()
  }
})

// router.beforeEach(function (to, _, next) {
//   if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
