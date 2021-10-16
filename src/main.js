// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import { axios } from 'vue/types/umd'
import App from './App'
import router from './router'
import './bus'
import axios from 'axios'  // ajax套件
import VueAxios from 'vue-axios'  //轉為vue套件
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import currencyFilter from './filters/currency';
Vue.use(VueAxios, axios)

import { ValidationObserver, ValidationProvider, extend, localize, configure } from 'vee-validate';
import TW from 'vee-validate/dist/locale/zh_TW.json'
import * as rules from 'vee-validate/dist/rules';
Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

localize('zh_TW', TW);

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid'
  }
});





Vue.component('Loading',Loading);


Vue.config.productionTip = false
// axios.defaults.withCredentials = true
Vue.filter('currency', currencyFilter);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

router.beforeEach((to, from, next) => {
  console.log('to',to,'from',from,'next',next)   
  if(to.meta.requiresAuth){
    
    const api = `${process.env.APIPATH}/api/user/check`;  //改api
    axios.post(api).then((response) => {
    console.log(response.data);
    // 回到login頁面
    if(response.data.success){   //確認使否有登入
      next();
    }else{
      next({
        path: '/login'    //無登入就回去login頁面
      });
    }
    });

  }else{
    next();
  }
  
})