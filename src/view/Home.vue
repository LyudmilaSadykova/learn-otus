<template>
    <h1>Компания</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, inventore? Accusantium blanditiis dolore vitae at, error quam debitis! Ducimus tenetur quisquam aliquam at consequatur labore ea vel alias similique beatae.</p>
    <v-row justify="center" v-if="!catalogStore.loading">
        <v-col
          v-for="(item, index) in catalogStore.productListHome" 
          :key="index"
          cols="12"
          md="6"
          >
          <ProductCard :product="item" />
        </v-col>
      </v-row>  
      <p v-else>Загрузка...</p>
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
}

p {
    color: #283593;
    padding: 20px 30px;
    display: flex;
    justify-content: center;
}
</style>