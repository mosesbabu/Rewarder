const Welcome = () => import('./components/Welcome.vue' /* webpackChunkName: "resource/js/components/welcome" */)
//const CategoryList = () => import('./components/category/List.vue' /* webpackChunkName: "resource/js/components/category/list" */)
const CustomerDetails = () => import('./components/CustomerDetails/Add.vue' /* webpackChunkName: "resource/js/components/customerdetails/add" */)
//const CategoryEdit = () => import('./components/category/Edit.vue' /* webpackChunkName: "resource/js/components/category/edit" */)

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
    }
]