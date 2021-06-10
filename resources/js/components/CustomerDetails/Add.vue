<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <h4>Add Customer Details</h4>
                </div>
                <div class="card-body">
                    <form @submit.prevent="create">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control" v-model="customer_details.first_name">
                                </div>
                            </div>
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Order Value</label>
                                    <input type="text" class="form-control" v-model="customer_details.order_value">
                                </div>
                            </div>
                             <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Reedemed</label>
                                    <input type="text"  class="form-control" v-model="customer_details.reedemed">
                                </div>
                               
                            </div>

                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"add-details",
    data(){
        return {
           customer_details:{
                first_name:"",
                order_value:""
            }
        }
    },
    methods:{
        async create(){
            await this.axios.post('/api/customer_details',this.customer_details).then(response=>{
                this.$router.push({name:"details"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>