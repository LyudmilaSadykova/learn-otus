<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script setup>
import { onMounted } from 'vue';
import Header from './view/Header.vue';
import Footer from './view/Footer.vue';
import { useCatalogStore } from './store/catalog';

const catalogStore = useCatalogStore();

onMounted(() => {
  catalogStore.loadProducts()
})
</script>

<style>

</style>
