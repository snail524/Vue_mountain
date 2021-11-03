<template>
    <div>
      
        <div class="container">
          <table class="table">
            <thead>
                <th></th>
                <th>品名</th>
                <th>數量</th>
                <th>單價</th>
            </thead>
            <tbody>
                <tr v-for="item in cart.carts" :key="item.cart">
                <td class="align-middle">
                    <button type="button" class="btn btn-outline-danger btn-sm" @click="removeCartItem(item.id)">
                    <i class="far fa-trash-alt"></i>
                    </button>
                </td>
                <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                    已套用優惠券
                    </div>
                </td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle ">{{ item.final_total }}</td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                <td colspan="3" class="text-right">總計</td>
                <td class="">{{ cart.total }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                <td colspan="3" class="text-right text-success">折扣價</td>
                <td class="text-right text-success">{{ cart.final_total }}</td>
                </tr>
            </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
            <input type="text" class="form-control" v-model="coupon_code" placeholder="請輸入優惠碼">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
                </button>
            </div>
            <button class="btn btn-outline-secondary" type="button" @click="goorder">
                test
                </button>
            </div>
        </div>


        <!-- 表單 -->
         <div class="my-5 row justify-content-center">
                <validation-observer class="col-md-6" v-slot="{ invalid }">

                <form  @submit.prevent="createOrder">
                  
                    <validation-provider  rules="required|email" v-slot="{ errors , classes }">
                    <!-- 輸入框 -->
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input id="email" type="email"  name="email" v-model="form.user.email"
                            class="form-control" :class="classes">
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                    </validation-provider>

                     <validation-provider  rules="required" v-slot="{ errors , classes }">
                    <!-- 輸入框 -->
                    <div class="form-group">
                        <label for="name">姓名</label>
                        <input id="name" type="name"  name="name" v-model="form.user.name"
                            class="form-control" :class="classes">
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                    </validation-provider>


                     <validation-provider  rules="required|numeric" v-slot="{ errors , classes }">
                    <!-- 輸入框 -->
                    <div class="form-group">
                        <label for="usertel">電話</label>
                        <input id="usertel" type="tel"  name="usertel" v-model="form.user.tel"
                            class="form-control" :class="classes">
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                    </validation-provider>

                      <validation-provider  rules="required" v-slot="{ errors , classes }">
                    <!-- 輸入框 -->
                    <div class="form-group">
                        <label for="useraddress">住址</label>
                        <input id="useraddress" type="text"  name="address" v-model="form.user.address"
                            class="form-control" :class="classes">
                        <!-- 錯誤訊息 -->
                        <span class="invalid-feedback">{{ errors[0] }}</span>
                    </div>
                    </validation-provider>

                <!-- 暫時趴斯 -->
                    <!-- <div class="form-group">
                    <label for="username">收件人姓名</label>
                    <input type="text" class="form-control" name="name" id="username" :class="{'is-invalid':errors.has('name')}"
                        v-model="form.user.name"  v-validate="'required'" placeholder="輸入姓名">
                    <span class="text-danger" v-if="errors.has('name')">  姓名必填 </span>
                    </div>
                
                    <div class="form-group">
                    <label for="usertel">收件人電話</label>
                    <input type="tel" class="form-control" id="usertel" v-model="form.user.tel" placeholder="請輸入電話">
                    </div>
                
                    <div class="form-group">
                    <label for="useraddress">收件人地址</label>
                    <input type="text" class="form-control" name="address" id="useraddress" v-model="form.user.address"
                        placeholder="請輸入地址">
                    <span class="text-danger">地址欄位不得留空</span>
                    </div> -->
                
                    <div class="form-group">
                    <label for="comment">留言</label>
                    <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
                    </div> 
                    <div class="text-right">
                    <button class="btn btn-danger" :disabled="invalid">送出訂單</button>
                    </div>
                </form>
                </validation-observer>

                </div>
            
    </div>
</template>

<script>
export default {
    data() {
        return {
            cart: [],
            coupon_code: '',
             form:{
                user:{
                    name: '',
                    email: '',
                    tel: '',
                    address: '',
                },
                message: '',
            }
        }
    },
    methods:{
        getCart(){
            const vm = this;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`
            vm.isLoading = true;
            this.$http.get(url).then((response) => {
                vm.cart = response.data.data;
                console.log(response.data.data);
                vm.isLoading = false;
            });
        },
        removeCartItem(id){
            const vm = this;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`
            vm.isLoading = true;
            this.$http.delete(url).then((response) => {
                // vm.cart = response.data.data;
                vm.getCart();
                console.log(response);
                vm.isLoading = false;
                
            });
        },
        addCouponCode(){
                const vm = this;
                const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`
                const coupon = {
                    code: vm.coupon_code
                }
                vm.isLoading = true;
                this.$http.post(url,{data: coupon}).then((response) => {
                // vm.cart = response.data.data;
                    vm.getCart();
                    console.log(response);
                    vm.isLoading = false;
                
            });
        },
        goorder(){
            console.log('12');
            const vm = this;
           vm.$router.push(`Customer_checkout`)

            // vm.$router.push(`order/${response.data.orderId}`)
        },
        createOrder(){
            const vm = this;
            const url =`${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`
            const order = vm.form;
            vm.isLoading = true;
            this.$http.post(url,{data: order}).then((response) => {
            // vm.cart = response.data.data;
                //vm.getCart();
                console.log('建立訂單',response);
                if(response.data.success){
                    vm.$router.push(`pay/${response.data.orderId}`)
                }
                vm.isLoading = false;
                
            });
        }
    },
    created(){
        this.getCart();
    }

}
</script>