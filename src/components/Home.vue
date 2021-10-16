<template>
    
    <div >
       <loading :active.sync="isLoading"></loading>

         <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
            <div class="d-flex align-items-center">
                <router-link to="/home" >
                <!-- <img src="https://i.imgur.com/CWANNSa.png" alt="" width="24" height="24" fill="none"> -->
                 <img class="d-block mx-auto" src="https://i.imgur.com/54PlzIF.jpg" alt="" height="36" fill="none">

                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mx-auto" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg> -->
                </router-link>
            </div>

            <div class=" align-items-center">  
                 <li class="py-2 d-none d-md-inline-block mr-5">
                    <router-link to="/productlist" >
                    <!-- <i class="fas fa-tags"></i> -->
                    <span data-feather="file-text"></span>
                    Prodcut
                    </router-link>
                </li>
                <!-- <a class="py-2 d-none d-md-inline-block mr-5" href="#">Product</a> -->
                
                <li class="py-2 d-none d-md-inline-block mr-5">
                    <router-link to="/cart" >
                    <!-- <i class="fas fa-tags"></i> -->
                    <span data-feather="file-text"></span>
                    Cart
                    </router-link>
                </li>
                 <li class="py-2 d-none d-md-inline-block">
                    <router-link to="/Login" >
                    <!-- <i class="fas fa-tags"></i> -->
                    <span data-feather="file-text"></span>
                    Login
                    </router-link>
                </li>
            </div>
        </div>
        </nav>
        

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
                <p><a class="btn btn-secondary" href="#">加入購物車</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-sm-3">
                 <img :src="products[6].imageUrl" alt=""  width="200" height="200"  style="  object-fit: cover ">
                <h2>{{ products[6].title }}</h2>
                <p>一次裝完想帶走的物品</p>
                <p><a class="btn btn-secondary" href="#">加入購物車</a></p>
            </div><!-- /.col-lg-4 -->
            <div class="col-sm-3">
                  <img :src="products[3].imageUrl" alt=""  width="200" height="200"  style="  object-fit: cover ">
                <h2>{{ products[3].title }}</h2>
                <p>And lastly this, the third column of representative placeholder content.</p>
                <p><a class="btn btn-secondary" href="#">加入購物車</a></p>
            </div><!-- /.col-lg-4 -->
            </div><!-- /.row -->

             <div class="row featurette mt-3">
                <div class="col-md-5" >
                    <h2 class="featurette-heading">百岳登頂組</h2>
                    <p class="lead"> 帳篷 * 1 <br> 登山包 *1 <br> 睡袋 * 1</p>
                    <p><a class="btn btn-secondary" href="#">加入購物車</a></p>

                </div>
                <div class="col-md-7">
                    <img src="https://i.imgur.com/ynCseDM.jpg" alt="" class="img-fluid " width="600" height="600" >
        
                </div>
                </div>

                <hr class="featurette-divider">

                <div class="row featurette">
                <div class="col-md-5 order-md-2">
                    <h2 class="featurette-heading">攀岩組 </h2>
                    <p class="lead">頭盔 * 1 <br> 吊帶 *1 <br> 繩子* 1</p>
                    <p><a class="btn btn-secondary" href="#">加入購物車</a></p>

                </div>
                <div class="col-md-7 order-md-1">
                    <img src="https://i.imgur.com/qegh14e.jpg" alt="" class="img-fluid " width="600" height="600" >

                </div>
                </div>
            
              <hr class="featurette-divider">

            <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading">溪流瀑布組 canyoneering</h2>
                <p class="lead">頭盔s * 1 <br> 吊帶 *1 <br> 溯溪鞋* 1 </p>
                <p><a class="btn btn-secondary" href="#">加入購物車</a></p>

            </div>
            <div class="col-md-5">
                <!-- <svg class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" height="500" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 500x500" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#eee"/><text x="50%" y="50%" fill="#aaa" dy=".3em">500x500</text></svg> -->
                <img src="https://scontent.frmq2-1.fna.fbcdn.net/v/t1.6435-9/32252828_10204450229653966_5394777475542679552_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=a83260&_nc_ohc=c7ZjpVdzvrgAX-8w-qp&_nc_ht=scontent.frmq2-1.fna&oh=5a08aa0c298ceaa48e38da5721e2be4e&oe=618F2814" alt="" class="img-fluid " width="600" height="600" >

            </div>
            </div>
        </div>
       
        <footer class="container">
        <p class="float-right"><a href="#">Back to top</a></p>
        <p>&copy; 2021  僅供練習使用 </p>
    </footer>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: [],
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
    },
    created(){
        this.getProducts();
    }
}
</script>