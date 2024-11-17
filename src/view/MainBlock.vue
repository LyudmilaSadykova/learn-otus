<template>
  <div v-if="loading" class="loading">
    Загрузка...
  </div>
  <div v-else>
    <v-row justify="center">
      <v-col
        v-for="(item, index) in productList" 
        :key="index"
        cols="12"
        md="6"
        >
        <ProductCard :product="item"/>
      </v-col>
    </v-row>  
  </div>

  <div v-if="errorState" class="error">
    {{ errorState }}
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ProductCard from '../components/ProductCard.vue';

const loading = ref(true);
const errorState = ref(false);
const productList = ref([]);

const getProducts = async () => {
        axios.get('https://fakestoreapi.com/products')
        .then(response => {
          productList.value = response.data;
          console.log(productList.value);
        })
        .catch(error => {
          //console.log(error);
          errorState.value = true;
        })
        .finally(() => loading.value = false)
    }

onMounted(() => {
    getProducts()
})
</script>

<style scoped>
.loading {
  text-align: center;
  font-size: 20px;
  color: #283593;
}
.error {
  text-align: center;
  font-size: 20px;
  color: red;
}
</style>