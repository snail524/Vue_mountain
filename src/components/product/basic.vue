<template>
    <div>
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
                    <router-link to="/homelogin" >
                    <!-- <i class="fas fa-tags"></i> -->
                    <span data-feather="file-text"></span>
                    Login
                    </router-link>
                </li>
            </div>
        </div>
        </nav>           
        <main class="">
            <router-view></router-view>
        </main>
       <footer class="container-fluid bg-light">
           <div class="container">
               <div class="row p-4">
                   <div class="col-8">
                      <h2>MountainBorrow</h2>
                      <p>phone: 0923-333-333</p>
                      <p>mail: MountainBorrow@abc.com</p>

                   </div>
                   <div class="col-4 d-flex justify-content-end align-items-end flex-wrap flex-column">
                         <p class="m-0"><a href="#" class="text-dark ">Back to top</a></p>
                         <p class="m-0">&copy; 2021  僅供練習使用 </p>

                   </div>
               </div>
           </div>
       
        </footer>

    </div>
</template>

<script>

export default {
    components: {
    
    },
    created(){
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `${token}`;
    }
}

</script>