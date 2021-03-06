import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)



const Home=()=>import('../views/home/Home.vue')
const Category=()=>import('../views/category/Catefory.vue')
const Cart=()=>import('../views/cart/Cart.vue')
const Profile=()=>import('../views/profile/Profile.vue')

export default new Router({
  mode:'history',
  routes: [
{
path:'',
redirect:'/home'
},
{
  path:'/home',
  component:Home
},
{
  path:'/category',
  component:Category
},
{
  path:'/cart',
  component:Cart
},
{
  path:'/profile',
  component:Profile
}
  ]
})
