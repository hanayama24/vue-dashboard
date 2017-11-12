<template>
  <div class="what">
    Trying out the first route with Vue! By {{ namecustom }}.
  </div>
</template>
<script>

export default {
  name: 'What',
  data() {
    return {
      namecustom: 'Hanayama',
    };
  },
};
</script>
<style scoped></style>