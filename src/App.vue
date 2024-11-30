<template>
  <Header @searchForm="searchForm" />
  <router-view />
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import Header from './view/Header.vue';
import Footer from './view/Footer.vue';
import { useCatalog } from './custom/useCatalog';
import { useStore } from 'vuex';

const store = useStore();
const { productList } = useCatalog();

onMounted(() => {
  store.dispatch('updateProducts', productList);
})
</script>

<style>

</style>
