<template>
    <div class="row">
        <div class="col-12 mb-2 text-end">
            <router-link :to='{name:"CustomerDetails"}' class="btn btn-primary">Add Customer</router-link>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Voucher Status</h4>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Name</th>
                                    <th>Order Value</th>
                                    <th>Voucher Value</th>
                                    <th>Reedemed</th>
                                </tr>
                            </thead>
                            <tbody v-if="customer_details.length > 0">
                                <tr v-for="(customer_detail,key) in customer_details" :key="key">
                                    <td>{{ customer_detail.id }}</td>
                                    <td>{{ customer_detail.first_name }}</td>
                                    <td>{{ customer_detail.order_value }}</td>
                                    <td>{{ customer_detail.voucher_value }}</td>
                                    <td>{{ customer_detail.reedemed }}</td>
                                    <td>
                                        
                                    </td>
                                </tr>
                            </tbody>
                            <tbody v-else>
                                <tr>
                                    <td colspan="4" align="center">No Details Found.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"customer_details",
    data(){
        return {
           customer_details:[]
        }
    },
    mounted(){
        this.getCustomerDetails()
    },
    methods:{
        async getCustomerDetails(){
            await this.axios.get('/api/customer_details').then(response=>{
                this.customer_details = response.data
            }).catch(error=>{
                console.log(error)
                this.customer_details = []
            })
        },
      
    }
}
</script>