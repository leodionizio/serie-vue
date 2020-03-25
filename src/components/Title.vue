<template>
  <div>
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Title',
  props: {
    text: { type: String, default: '' }
  }
};
</script>

<style scoped>
h1 {
  margin: 40px 0 0;
  font-size: 18px;
}
</style>
