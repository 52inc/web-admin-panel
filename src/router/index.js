import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/pages/Dashboard'
import Users from '@/components/pages/Users'
import Filters from '@/components/pages/Filters'
import Listings from '@/components/pages/Listings'
import Organizations from '@/components/pages/Organizations'
import Sponsors from '@/components/pages/Sponsors'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    }, {
      path: '/users',
      name: 'Users',
      component: Users,
    }, {
      path: '/filters',
      name: 'Filters',
      component: Filters,
    }, {
      path: '/listings',
      name: 'Listings',
      component: Listings,
    }, {
      path: '/organizations',
      name: 'Organizations',
      component: Organizations,
    }, {
      path: '/sponsors',
      name: 'Sponsors',
      component: Sponsors,
    }
  ],
})
