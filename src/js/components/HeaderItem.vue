<template>
    <div class="vue-header">
        <div class="vue-menu">
            <span class="vue-menu__icon ion-navicon"></span>
        </div>
        <h3 class="vue-header__title">Header is Ready!!!</h3>           
    </div>
</template>

<script>

export default {
  name: 'header-item',
};
</script>

<style>
    @import url("http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css"); 
    .ion-navicon {
        color: #fff;
    }

    .vue-menu__icon {
        display: inline-block;
        padding: 1.4rem;
        width: 4.2rem;
        border-radius: .4rem;
        list-style: none;
        text-align: center;
        font-weight: normal;
        font-size: 32px;
        color: #fff;
        cursor: pointer;
    }

    .vue-header {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        background-color: #2f323a;
        display: flex;
        flex-flow: row nowrap;
    }

    .vue-header__title {
        color: #fff;
        margin: 0;
        padding-top: 2rem;
        padding-bottom: 2rem;
        font-size: 2.2rem; 
        font-weight: normal;
    }
</style>