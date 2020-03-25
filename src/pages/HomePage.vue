<template>
  <div class="container">
    <Title :text="titlePage" />
  </div>
</template>

<script>
import Title from '../components/Title'

export default {
  name: 'HomePage',
  components: {
    Title
  },
  data() {
    return {
      titlePage: 'Tela de início'
    }
  }
}
</script>

<style scoped>
.container {
  width: 100%;
  max-width: 790px;
  margin: auto;
}
</style>