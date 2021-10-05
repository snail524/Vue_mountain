<template>
    <div>
        <loading :active.sync="isLoading"/>
         <div class="text-right">
            <button class="btn btn-primary" @click="openCodeModal(true)" >建立優惠卷</button>
        </div>
        <table class="table mt-4">
            <thead>
                <tr>
                    <th >名稱</th>
                    <th width="120">折扣百分比</th>
                    <th width="120">優惠碼</th>
                    <th width="120">到期日</th>
                    <th width="120">是否啟用</th>
                    <th width="140">編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item  in couponCode" :key="item.id">
                    <td> {{ item.title }}  </td>
                    <td> {{ item.discount }}  </td>
                    <td> {{ item.code }}  </td>
                    <td> {{ item.due_date |  dateFilter  }} </td>

                    <td>
                        <span v-if="item.is_enabled" class="text-success">啟用</span>
                        <span v-else>未啟用 </span>
                    </td>
                     <td>
                        <button class="btn btn-outline-primary btn-sm" @click="openCodeModal(false,item)" >
                            編輯
                        </button>
                        <button class="btn btn-outline-danger btn-sm"  @click="deleteModal(item)">
                            刪除
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>

      


        <!-- <form> -->
             <div class="modal fade" id="couponModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                 <div class="modal-content border-0">
                <div class="modal-header bg-white text-dark">
                    <h5 class="modal-title" id="exampleModalLabel">
                    <span>Coupon</span>
                    </h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <div class="form-group">
                                <label for="title">標題</label>
                                <input type="text" class="form-control" id="title" 
                                v-model="tempCoupon.title"
                                    placeholder="請輸入標題">
                            </div>
                            <div class="form-group">
                                <label for="code">優惠碼</label>
                                <input type="text" class="form-control" id="code" v-model="tempCoupon.code"
                                    placeholder="優惠碼">
                            </div>
                            <div class="form-group">
                                <label for="date">到期日</label>
                                
                                <!-- <input type="text" class="form-control" id="date" v-model="tempCoupon.date"
                                    placeholder="2021/9/29"> -->
                                 <input type="date" class="form-control" id="due_date" v-model="due_date">
                             </div>
                             <div class="form-group">
                                <label for="discount">折扣百分比</label>
                                <input type="text" class="form-control" id="discount" v-model="tempCoupon.discount"
                                    placeholder="80%">
                             </div>
                             <div class="form-check">
                                <input class="form-check-input" type="checkbox"  v-model="tempCoupon.is_enabled" :true-value="1" :false-value="1"
                                id="is_enabled">
                                <label class="form-check-label" for="tempCoupon.is_enabled">
                                是否啟用
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                    <button type="button" class="btn btn-danger" @click="updatdCode">確認</button>
                </div>
                </div>
             </div>
             </div>


            <div class="modal fade" id="delProductModal" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
                <h5 class="modal-title" id="exampleModalLabel">
                <span>刪除產品</span>
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                是否刪除  <strong class="text-danger" >{{tempCoupon.title}}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
                <button type="button" class="btn btn-danger" @click="deleteCoupon"
                >確認刪除</button>
            </div>
            </div>
        </div>
        </div>

    </div>
</template>

<script>
import $ from 'jquery';


export default {
    data(){
        return{
            isLoading: false,
            couponCode: [],
            pagination: {},
            New: false,
            tempCoupon: {},
            status:{
                loadingItem:'',
            },
            
            Dateitem: [],
            due_date:new Date(),
            today:''

        }
    },
     watch: { 
        due_date() {
        const vm = this;
        const timestamp = Math.floor(new Date(vm.due_date) / 1000);
      vm.tempCoupon.due_date = timestamp;
        },
    },
    filters: {
        dateFilter: function (time) {
            const date = new Date(time * 1000);
            return date.toLocaleDateString();
        }
        },
    methods:{
        getCodes(){
            const api =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupons`
            const vm = this;
            vm.isLoading = true;
            console.log(process.env.APIPATH,process.env.CUSTOMPATH);
            this.$http.get(api).then((response) => {
            console.log('ddd',response.data);
            vm.isLoading = false;
            vm.couponCode = response.data.coupons;
            // vm.products = response.data.products;
            });  
        },
        openCodeModal(New,item){
            const vm = this;
            if(New){
                this.tempCoupon = {};
                this.New = true;
            }
            else if(!New){
                this.tempCoupon = Object.assign({},item);
                this.New = false;
                const dateAndTime = new Date(this.tempCoupon.due_date * 1000).toISOString().split('T');
                this.due_date = dateAndTime[0];
            }
            $('#couponModal').modal('show');
        },
        updatdCode(){
            const vm = this;
            let url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon`
            let httpMethod = 'post';
            // console.log('vm',vm);
            vm.isLoading = true;
            if(!vm.New){
                httpMethod = 'put';
                url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
                vm.due_date = new Date(vm.tempCoupon.due_date * 1000);
            }

            this.$http[httpMethod](url,{data: vm.tempCoupon}).then((response) => {
                // vm.cart = response.data.data;
                console.log(response.data);
                vm.isLoading = false;
                console.log(vm.tempCoupon);
                if(response.data.success){
                    $('#couponModal').modal('hide');
                    vm.getCodes();
                } 
            });
        },
        deleteModal(item){
            const vm = this;
            this.tempCoupon = item;
            $('#delProductModal').modal('show');

        },
        deleteCoupon(){
            const vm = this;
            let api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`;
            this.$http.delete(api, {data: vm.tempProduct}).then((response) => {
            console.log(response.data);
            $('#delProductModal').modal('hide');
            vm.getCodes();
            });
        },
    },
    created(){
        // this.updatdCode();
        this.getCodes();
    },
}
</script>