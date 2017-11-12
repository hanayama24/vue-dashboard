<template>
    <div class="vue-dashboard">
        <div class="vue-dashboard__cells">
            <cell-item></cell-item>
            <cell-item></cell-item>
            <cell-item></cell-item>
            <cell-item></cell-item>
        </div>        
    </div>
</template>

<script>
import CellItem from './CellItem';

export default {
  name: 'dashboard-item',
  components: {
    CellItem,
  },
};
</script>

<style>
    .vue-dashboard {
        background-color: #edeff5;
        height: calc(100vh - 7.2rem);
    }
    .vue-dashboard__title {
        color: #2f323a;
        margin: 0;
        padding-top: 20rem;
        font-size: 2.2rem; 
        font-weight: normal;
    }

    .vue-dashboard__cells {
        display: flex;
        flex-flow: row wrap;
        padding: 1rem;
    }
</style>