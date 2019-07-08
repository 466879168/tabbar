<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="">
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/category.svg" alt="">
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="">
        <div>首页</div>
      </tab-bar-item>
      <tab-bar-item>
        <img src="./assets/img/tabbar/home.svg" alt="">
        <div>首页</div>
      </tab-bar-item>
    </tab-bar>
    <router-view />
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar'
import TabBarItem from './components/tabbar/TabBarItem'
export default {
  name: "App",
  components:{
    TabBar,
    TabBarItem
  }
};
</script>

<style>
@import "./assets/css/base.css";

</style>
