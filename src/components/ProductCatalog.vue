<template>
  <h1>{{ Каталог }}</h1>
  <v-row justify="center">
    <v-col
      v-for="(item, index) in productListFiltered" 
      :key="index"
      cols="12"
      md="6"
      >
      <ProductCard :product="item"/>
    </v-col>
  </v-row> 
</template>
  
<script setup>
import { computed} from 'vue';
import ProductCard from '../components/ProductCard.vue';
import { useStore } from 'vuex';

const store = useStore();
const productListFiltered = computed(() => store.getters.filteredProducts);
</script>
  
<style scoped>
h1 {
  color: #283593;
  text-align: center;
  margin-bottom: 15px;
}
</style>