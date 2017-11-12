<template>
    <div v-bind:class="{ resize: isResize }" class="vue-cell">
        <h3 class="vue-cell__header">
            Cell is Ready!!! 
            <span @click="triggerContextMenu" class="vue-cell__icon ion-android-settings"></span>
            <cell-context-menu 
                v-on:resize="resizeElement" 
                v-if="isShow" 
                v-bind:contextTrigger='contextTrigger'
            ></cell-context-menu>
        </h3>       
        <div class="vue-cell__content">
            Cell Content!!!
        </div>
    </div>
</template>

<script>
import CellContextMenu from './CellContextMenu';

export default {
  name: 'cell-item',
  data() {
    return {
      isShow: false,
      isResize: false,
      contextTrigger: 'Large',
    };
  },
  methods: {
    triggerContextMenu() {
      this.isShow = !this.isShow;
    },
    resizeElement() {
      this.isResize = !this.isResize;
      this.isShow = !this.isShow;
      this.contextTrigger = (this.contextTrigger === 'Large') ? 'Small' : 'Large';
    },
  },
  components: { CellContextMenu },
};
</script>

<style>
    .vue-cell__icon {
        display: inline-block;
        width: 1.6rem;
        height: 1.6rem;
        color: #50c14e;
        position: absolute;
        right: 1.3rem;
        font-size: 2rem;
        cursor: pointer;
    }
    .vue-cell__header {
        margin: 0;
        color: #2f323a;
        font-size: 1.6rem;
        padding-top: 1rem;
        padding-bottom: 1rem;
        position: relative;
    }

    .vue-cell {
        background-color: #fff; 
        border-radius: 0.5rem;
        -webkit-box-shadow: 0 10px 6px -6px rgba(209, 215, 233, 0.5);
	    -moz-box-shadow: 0 10px 6px -6px rgba(209, 215, 233, 0.5);
	    box-shadow: 0 10px 6px -6px rgba(209, 215, 233, 0.5);
        flex: 1;
        margin: 1rem;
        flex-basis: 30vw;
        height: calc(50vh - 6.6rem);
    }

    .vue-cell.resize {
        flex-basis: 60vw;
    }

    .vue-cell__content {
        padding: 1rem;
    }

</style>