<template>
    <div>
        <loading :active.sync="isLoading"/>

        <div class="container mt-3">
            <div class="row">
                <div class="col-2">
                    <ul class="list-group text-center ">
                        <li class="list-group-item list-group-item-action bg-secondary text-white"    @click="link = 'all'">全部</li>
                        <li class="list-group-item list-group-item-action"  @click="link = '爬山'">登山</li>
                        <li class="list-group-item list-group-item-action " @click="link = '攀岩'">攀岩</li>
                        <li class="list-group-item list-group-item-action ">溯溪</li>

                    </ul>
                </div>

                <div class="col-10 d-flex flex-wrap">
                    <div class="card col-6 col-md-4 mb-2 no-gutters " style="width: 18rem;"  v-for="item in filterData" :key="item.id">
                        <div class="card-img-top" style="height: 150px; background-size: cover; background-position: center" :style="{backgroundImage: `url(${item.imageUrl})`}">
                        </div>
                        <div class="card-body ">
                            <h5 class="card-title">{{item.title}}</h5>
                            <p class="card-text">{{ item.content }}</p>
                             <div class="d-flex justify-content-between align-items-baseline">
                        <!-- <div class="h5">2,800 元</div> -->
                            <del class="h6" v-if="item.price!=item.origin_price" >原價{{ item.origin_price }}</del>
                            <div class="h5" v-if="item.price!=item.origin_price" >現在只要{{item.price}}</div>
                             <div class="h6 text-right" v-if="item.price==item.origin_price" ></div>
                            <div class="h6 text-right" v-if="item.price==item.origin_price" >{{item.origin_price}}元/{{item.unit}}</div>

                            </div>
                            <div class="d-flex">
                                <button type="button" class="btn btn-outline-secondary btn-sm" @click="getProduct(item.id)">
                                    <i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
                                查看更多
                                </button>
                                <button type="button" class="btn btn-outline-danger btn-sm ml-auto" @click="addtoCart(item.id)">
                                <i class="fas fa-spinner fa-spin"  v-if="status.loadingItem === item.id"></i>
                                    加到購物車
                                </button>
                            </div>
                            <!-- <a href="#" class="btn  btn-secondary" @click.prevent="addtoCart(item.id)">加到購物車</a>
                            <a href="#" class="btn  btn-primary" @click.prevent="getProduct(item.id)">查看更多</a> -->

                        </div>
                    </div>
                </div>  
        </div>
        </div>

        <div class="modal fade" id="productModal" tabindex="-1" role="dialog"
      aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                     </div>
                    <div class="modal-body">

                        <img :src="product.imageUrl" class="img-fluid" alt="">
                        <blockquote class="blockquote mt-3">
                        <p class="mb-0">{{ product.content }}</p>
                        <footer class="blockquote-footer text-right">{{ product.description }}</footer>
                        </blockquote>
                        <div class="d-flex justify-content-between align-items-baseline">
                            <div class="h4" v-if="product.price==product.origin_price">{{ product.origin_price }} 元</div>
                               <del class="h6" v-if="product.price!=product.origin_price">原價 {{ product.origin_price }} 元</del>
                                 <div class="h4" v-if="product.price!=product.origin_price">現在只要 {{ product.price }} 元</div>
                                 </div>
                                 
                              <select name="" class="form-control mt-3" v-model="product.num">
                                    <option :value="num" v-for="num in 10" :key="num">
                                        租借{{num}} {{product.unit}} 
                                    </option>
                                </select>
                            </div>
            <div class="modal-footer">
                <div class="text-muted text-nowrap mr-3">
                 <strong v-if="product.price!=product.origin_price">小計{{ product.num * product.price }}</strong> 
                 <strong v-if="product.price==product.origin_price">小計{{ product.num * product.origin_price }}</strong> 元
                </div>
                <button type="button" class="btn btn-primary" @click="addtoCart(product.id,product.num)">
                <i class="fas fa-spinner fa-spin" v-if="product.id === status.loadingItem"></i>
                加到購物車
                </button>
            </div>
            </div>
            </div>
         </div>

    </div>
</template>

<script>
import $ from 'jquery';

export default {
    data() {
        return {
            products: [],
            product:{
                num: 1
            },
            link : 'all',
            status:{
                loadingItem:'',
            },
            isLoading: false,
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
         getProduct(id){
            const vm = this;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`
            // vm.status.loadingItem = id;
            this.$http.get(url).then((response) => {
                vm.product = response.data.product;
                console.log(response);
                if(!vm.product.num){
                    vm.product.num=1;
                }
                
                vm.status.loadingItem= '';
                $('#productModal').modal('show');
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
                console.log(id);
                console.log(response);
                vm.status.loadingItem= '';
                // vm.getCart();
                // $('#productModal').modal('hide');

            });
        },
    },
    computed:{
        filterData() {
          const newData = this.products.filter(item => {
            // data 所選擇的性別 vs Ajax 所取得的資料性別
            return item.category === this.link// 判斷
          })
          if(this.link =="all"){
              return this.products;
          }
          return newData;
        }
    },
    created(){
        this.getProducts();
    }
}
</script>