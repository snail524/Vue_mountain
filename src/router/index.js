import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Dashboard from '@/components/Dashboard'
import Login from '@/components/pages/Login'
import Products from '@/components/pages/Products'
import CustormerOrder from '@/components/pages/CustomerOrders'
import CouponTicket from '@/components/pages/coupon'
import OrderList from '@/components/pages/OrderList'
import CustomerCheckout from '@/components/pages/CustomerCheckOut'

import Home from '@/components/product/Home'
import ProductList from '@/components/product/Productlist'
import Cart from '@/components/product/Cart'
import HomeLogin from '@/components/product/HomeLogin'
import pay  from '@//components/product/pay'
import Basic  from '@//components/product/basic'




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
      path: '/HomeLogin',
      name: 'HomeLogin',
      component: HomeLogin
    },

    {
      path: '/admin',
      name: 'Dashboard',
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
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          path: 'customer_order',
          name: 'CustormerOrder',
          component: CustormerOrder
        },
        {
          path: 'Customer_checkout/:orderId',
          name: 'CustomerCheckout',
          component: CustomerCheckout
        },
        {
          path: 'Coupon_ticket',
          name: 'CouponTicket',
          component: CouponTicket,
          meta: { requiresAuth: true },
        },
        {
          path: 'Order_list',
          name: 'OrderList',
          component: OrderList,
          meta: { requiresAuth: true },
        },
      ],
    },


    {
      path: '/',
      name: 'Basic',
      component: Basic,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
        
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/productlist',
          name: 'ProductList',
          component: ProductList 
        },
        {
          path: 'pay/:orderId',
          name: 'pay',
          component: pay
        },
      
      ],
    },
   
  ]
})
