<template>
  <Header v-model:tab="tab" @searchForm="searchForm" />
  <MainBlock :tab="tab" :filter="filter" />
  <v-footer class="text-center d-flex flex-column">
    <div>
      {{ new Date().getFullYear() }} — <strong>Otus learn</strong>
    </div>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';
import MainBlock from './view/MainBlock.vue'
import Header from './components/layout/Header.vue';

const tab = ref('Каталог товаров');
const filter = ref([]);

const searchForm = ($event) => {
  filter.value = $event;
}

</script>

<style scoped>

</style>
