<template>
  <h1>{{ props.tab }}</h1>
  <div v-if="loading" class="loading">
      Загрузка...
  </div>
  <ProductCatalog 
    v-show="props.tab === 'Каталог товаров'" 
    :filter="filter" 
    :loading="loading" 
    :productList="productList"
    @addToCart="addToCart"
  />
  <div v-if="errorState" class="error">
    {{ errorState }}
  </div>
  <AddProductForm v-show="props.tab === 'Добавить новый товар'" @addProduct="addProduct" />
  <Basket v-show="props.tab === 'Корзина'" :basketList="basketList" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import AddProductForm from '../components/AddProductForm.vue';
import Basket from '../components/Basket.vue';
import ProductCatalog from '../components/ProductCatalog.vue';

const props = defineProps(['tab', 'filter']);

const loading = ref(true);
const errorState = ref(false);
const productList = ref([]);
const basketList = ref([]);

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

const addProduct = (values) => {
  let product = {
    id: productList.value.length + 1,
    category: values.category,
    title: values.title,
    price: values.price,
    description: values.description,
    image: '',
    rating: {
      rate: 5,
      count: 1,
    }
  };

  productList.value.push(product);
  //console.log(productList.value);
}

const addToCart = ($event) => {
  basketList.value.push($event);
  //console.log(basketList.value);
}

onMounted(() => {
      getProducts()
  })
</script>

<style scoped>
h1 {
  color: #283593;
  text-align: center;
  margin-bottom: 15px;
}
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