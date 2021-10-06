import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import CustormerOrder from '@/components/pages/CustomerOrders'
import CouponTicket from '@/components/pages/coupon'
import OrderList from '@/components/pages/OrderList'


import axios from 'axios'  // ajax套件
import VueAxios from 'vue-axios'  //轉為vue套件

Vue.use(Router)
Vue.use(VueAxios, axios)
export default new Router({
  routes: [
    {
      path: '*',
      redirect: 'login',

    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'HelloWorld',
      component: Dashboard,
      children: [
        {
          path: 'products',
          name: 'Products',
          component: Products,
          meta: { requiresAuth: true },
        },
      ],

    },
    {
      path: '*',
      name: 'HelloWorld',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustormerOrder',
          component: CustormerOrder
        },
      ],
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: Dashboard,
      children: [
        {
          path: 'Coupon_ticket',
          name: 'CouponTicket',
          component: CouponTicket,
          meta: { requiresAuth: true },

        },
      ],
    },

    {
      path: '/',
      name: 'HelloWorld',
      component: Dashboard,
      children: [
        {
          path: 'Order_list',
          name: 'OrderList',
          component: OrderList,
          meta: { requiresAuth: true },

        },
      ],
    },


  ]
})
