<template>
  <Header />
  <MainBlock />
  <v-footer class="text-center d-flex flex-column">
    <div>
      {{ new Date().getFullYear() }} — <strong>Otus learn</strong>
    </div>
  </v-footer>
</template>

<script setup>
import MainBlock from './view/MainBlock.vue'
import Header from './components/layout/Header.vue';
</script>

<style scoped>

</style>
