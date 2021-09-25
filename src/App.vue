<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
   
  </div>
</template>

<script>
export default {
  name: 'App',
  // created(){
  //   const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
  //   // const api='https://vue-course-api.hexschool.io/api/immigrant/products';
  //   // 加上api伺服器路徑
  //   // 申請的api path
  //   console.log(process.env.APIPATH,process.env.CUSTOMPATH);
  //   this.$http.get(api).then((response) => {
  // console.log(response.data);
  // })
  // },
}
</script>

<style lang="scss">
// @import "~bootstrap/scss/bootstrap";  // moduel的bootstrap 後內的....
@import "./assets/all"
</style>
