<template>
    
    <div >
        <loading :active.sync="isLoading"/>

         <!-- <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
            <div class="d-flex align-items-center">
                <router-link to="/home" >
                 <img class="d-block mx-auto" src="https://i.imgur.com/54PlzIF.jpg" alt="" height="36" fill="none">
                </router-link>
            </div>

            <div class=" align-items-center">  
                 <li class="py-2 d-none d-md-inline-block mr-5">
                    <router-link to="/productlist" >
                    <span data-feather="file-text"></span>
                    Prodcut
                    </router-link>
                </li>
                
                <li class="py-2 d-none d-md-inline-block mr-5">
                    <router-link to="/cart" >
                    <span data-feather="file-text"></span>
                    Cart
                    </router-link>
                </li>
                 <li class="py-2 d-none d-md-inline-block">
                    <router-link to="/Login" >
                    <span data-feather="file-text"></span>
                    Login
                    </router-link>
                </li>
            </div>
        </div>
        </nav> -->
        

        <div class="position-relative overflow-hidden  text-center bg-light">
        <img src="https://i.imgur.com/5QcGGZe.jpg" class=" position-absolute img-fluid shadow-sm  d-block" alt="">
        <div class="col-md-5 p-lg-5 mx-auto my-5 text-white">
            <h1 class="display-4 font-weight-normal">戶外幫手</h1>
            <p class="lead font-weight-normal">上山溯溪野外裝備通通都有</p>
            <a class="btn btn-outline-light" href="#">Coming soon</a>
        </div>
        <!-- <div class="d-none d-md-block"></div> -->
        <!-- <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div> -->
        </div>
        
    <div class="container marketing mt-3 shadow-sm p-3">
        <div class="row">
            <div class="col-12 p-2">
                <h3>
                    熱門裝備區
                </h3>
            </div>
        </div>
         <div class="row d-flex justify-content-around">
            <div class="col-sm-3">
                
                <img :src="products[7].imageUrl" alt=""  width="200" height="200">
                <h2>{{ products[7].title }}</h2>
                <p>豪華帳篷，兼具前庭後院，遮風下雨都沒問題</p>
                <p><a class="btn btn-secondary" href="#"  @click="addtoCart('-MlmRJcaRfa5h08HWwon')">加入購物車</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-sm-3">
                 <img :src="products[6].imageUrl" alt=""  width="200" height="200"  style="  object-fit: cover ">
                <h2>{{ products[6].title }}</h2>
                <p>一次裝完想帶走的物品</p>
                <p><a class="btn btn-secondary" href="#"  @click="addtoCart('-MlmS1MHAKxgWujQpilE')">加入購物車</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-sm-3">
                  <img :src="products[3].imageUrl" alt=""  width="200" height="200"  style="  object-fit: cover ">
                <h2>{{ products[3].title }}</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a class="btn btn-secondary" href="#" @click="addtoCart('-MlmT9I6Ol18rOsqnjIv')">加入購物車</a></p>
            </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->

             <div class="row featurette mt-3">
                <div class="col-md-5" >
                    <h2 class="featurette-heading">百岳登頂組</h2>
                    <p class="lead"> 帳篷 * 1 <br> 登山包 *1 <br> 睡袋 * 1</p>
                    <p><a class="btn btn-secondary" href="#" @click.prevent="addtoCarts('-MlmRJcaRfa5h08HWwon','-MlmS1MHAKxgWujQpilE','-MlmT9I6Ol18rOsqnjIv')">加入購物車</a></p>

                </div>
                <div class="col-md-7">
                    <img src="https://i.imgur.com/ynCseDM.jpg" alt="" class="img-fluid " width="600" height="600" >
        
                </div>
                </div>

                <hr class="featurette-divider">

                <div class="row featurette">
                <div class="col-md-5 order-md-2">
                    <h2 class="featurette-heading">攀岩組 </h2>
                    <p class="lead">頭盔 * 1 <br> 吊帶 *1 <br> </p>
                    <p><a class="btn btn-secondary" href="#" @click.prevent="addtoCarts('-MlmTn2L84XPJp_E2tZP','-MlmTQ2hGsuBDHcTeZfy')">加入購物車</a></p>

                </div>
                <div class="col-md-7 order-md-1">
                    <img src="https://i.imgur.com/qegh14e.jpg" alt="" class="img-fluid " width="600" height="600" >

                </div>
                </div>
            
              <hr class="featurette-divider">

            <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">溪流瀑布組 canyoneering</h2>
                <p class="lead">頭盔 * 1 <br> 吊帶 *1 <br>  </p>
                <p><a class="btn btn-secondary" href="#" @click.prevent="addtoCarts('-MlmTn2L84XPJp_E2tZP','-MlmTQ2hGsuBDHcTeZfy')">加入購物車</a></p>

            </div>
            <div class="col-md-5">
                <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
                <img src="https://i.imgur.com/DAahI9r.jpg" alt="" class="img-fluid " width="600" height="600" >

            </div>
            </div>
        </div>
       
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
            isLoading: false,
            status:{
                loadingItem:'',
            },
           
        }
    },
    methods:{
        getProducts(){
            const vm = this;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`
            // const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`
            vm.isLoading = true;
            // console.log(process.env.APIPATH,process.env.CUSTOMPATH);
            this.$http.get(url).then((response) => {
            console.log(response.data);
            vm.products = response.data.products;
            // vm.pagination =response.data.pagination;
            vm.isLoading = false;
            });  
        },
        
        addtoCart(id,qty = 1){
             const vm = this;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            vm.status.loadingItem = id;
            const cart = {
                product_id: id,
                qty
            }
            this.$http.post(url,{data: cart}).then((response) => {
                console.log(response);
                vm.status.loadingItem= '';
            });
        },
         addtoCarts(id1,id2,id3,qty = 1){
             const vm = this;
             const c = [id1,id2,id3];
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            for(var i=0;i<3;i++){
                console.log(c[i]);
                vm.status.loadingItem = c[i];
                const cart = {
                    product_id: c[i],
                    qty
                }
                this.$http.post(url,{data: cart}).then((response) => {
                console.log(response);
                vm.status.loadingItem= '';
            });
            }
            // vm.status.loadingItem = id;
            // const cart = {
            //     product_id: id,
            //     qty
            // }
          
        },

    },
    created(){
        this.getProducts();
    }
}
</script>