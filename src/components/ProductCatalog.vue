<template>
  <h1>{{ Каталог }}</h1>
  <v-row justify="center">
    <v-col
      v-for="(item, index) in catalogStore.productListFiltered" 
      :key="index"
      cols="12"
      md="6"
      >
      <ProductCard :product="item"/>
    </v-col>
  </v-row> 
</template>
  
<script setup>
import ProductCard from '../components/ProductCard.vue';
import { useCatalogStore } from '../store/catalog';

const catalogStore = useCatalogStore();
</script>
  
<style scoped>
h1 {
  color: #283593;
  text-align: center;
  margin-bottom: 15px;
}
</style>