<template>
    <div class="vue-cell__context">
        <ul class="vue-context__items">
            <li class="vue-context__item">Edit</li>
            <li @click="resizeItem" class="vue-context__item">{{ contextTrigger }}</li>
            <li class="vue-context__item">Close</li>
        </ul>       
    </div>
</template>

<script>

export default {
  name: 'cell-context-menu',
  props: ['contextTrigger'],
  methods: {
    resizeItem() {
      /* eslint-disable no-alert, no-console */
      console.log(this.contextTrigger);
      this.$emit('resize');
    },
  },
};
</script>

<style>
    .vue-cell__context {
        padding: 1rem 2rem;
        border: 0.1rem solid transparent;
        background-color: #50c14e;
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: inline-block;
        box-sizing: border-box;
        border-radius: 0.4rem;
        top: 4rem;
    }
    .vue-context__items {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: left;
    }

    .vue-context__item {
        font-size: 1.2rem;
        font-weight: 300;
        color: #fff;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        border-bottom: 0.1rem solid transparent;
        cursor: pointer;
    }

    .vue-context__item:hover {
      border-bottom: 0.1rem solid #fff;
    }



.vue-cell__context:after,
.vue-cell__context:before {
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid #50c14e;
    top: -0.5rem;
    content: '';
    right: 0.5rem;
    margin-left: -0.5rem;
    position: absolute;
}

/* Styling for second triangle (border) */

.vue-cell__context:before {
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    border-bottom: 0.6rem solid;
    border-bottom-color: inherit; /* Can't be included in the shorthand to work */
    top: -0.6rem;
    right: 0.4rem;
    margin-left: -0.4rem;
}
</style>