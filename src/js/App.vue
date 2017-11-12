<template>
  <div id="app">
    <header-item></header-item>
    <dashboard-item></dashboard-item>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderItem from './components/HeaderItem';
import DashboardItem from './components/DashboardItem';

export default {
  name: 'app',
  components: {
    HeaderItem,
    DashboardItem,
  },
};
</script>

<style>
    html,
    body {
      font-size: 10px;
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      margin: 0;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
