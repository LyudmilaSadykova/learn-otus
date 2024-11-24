<template>
    <div v-if="!props.loading">
      <v-row justify="center">
        <v-col
          v-for="(item, index) in productFiltered" 
          :key="index"
          cols="12"
          md="6"
          >
          <ProductCard :product="item" @addToCart="$emit('addToCart', $event)"/>
        </v-col>
      </v-row>  
    </div>
  </template>
  
  <script setup>
  import { ref, computed} from 'vue';
  import ProductCard from '../components/ProductCard.vue';

  const props = defineProps(['filter', 'loading', 'productList'])
    
  const productFiltered = computed(() => {
    console.log(props.filter);
    return props.productList.filter((product) => 
      ((!props.filter[0] || props.filter[0] && product.title.indexOf(props.filter[0]) > -1) &&
      (!props.filter[1] || props.filter[1] && product.price > props.filter[1]) && (!props.filter[2] || props.filter[2] && product.price < props.filter[2]))
    );
  });



</script>
  
<style>

</style>