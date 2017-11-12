<template>
  <div class="simply">
    <h1>{{ msg }}</h1>
    <ul>
        <todo-item
          v-for="item in groceryList"
          v-bind:todo="item"
          v-bind:key="item.id"
          :class="{ green: item.id === 0}"
        ></todo-item>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Simply',
  data() {
    return {
      msg: 'Welcome to Your Vue.js <br> App Simply Component Ready',
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 3, text: 'Milk' },
        { id: 4, text: 'Barbeque meat' },
      ],
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .green {
    color: #42b983;
  }
</style>
