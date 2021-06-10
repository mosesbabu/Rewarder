const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
const CustomerList = () => import('./components/CustomerDetails/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CustomerDetails = () => import('./components/CustomerDetails/Add.vue' /* webpackChunkName: "resource/js/components/customerdetails/add" */)

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
  
    {
        name: 'CustomerDetails',
        path: '/customer_details/add',
        component: CustomerDetails
    },

    {
        name: 'CustomerList',
        path: '/voucher_status',
        component: CustomerList
    }
]