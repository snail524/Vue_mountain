<template>
    <div>
        <!-- <loading :active.sync="isLoading"></loading> -->
        <table class="table mt-4">
            <thead>
                <tr>
                    <th width="120">購買時間</th>
                    <th>Email</th>
                    <th width="120">購買款項</th>
                    <th width="120">應付金額</th>
                    <th width="100">是否付款</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in orders" :key="item.id">
                    <!-- <td> {{ item }}  </td>
                    <td> {{ item }}  </td>
                    <td> {{ item.code }}  </td>
                    <td>  </td>
                    <td> {{  item[is_paid] }} </td> -->
                </tr>
            </tbody>
        </table>
        <tbody>

        </tbody>
    </div>
</template>

<script>
export default {
    data(){
        return{
            orders:[],
            isLoading:false,
        };
    },
    methods:{
        getOrders(){
            const vm =this;
            const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/admin/orders`;
            this.$http.get(api,).then((response) => {
                console.log(response.data);
                vm.orders = response.data.orders;
            });
        }
    },
    created(){
        this.getOrders();
    }
}
</script>