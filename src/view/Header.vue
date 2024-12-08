<template>
  <div class="header">
    <Navigation />
    <div>
      <SearchForm v-show="showForm" />
    </div>
  </div>
</template>

<script setup>
import SearchForm from './SearchForm.vue';
import Navigation from './Navigation.vue';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const showForm = computed(() => {
  return route.name === "products"
});
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
}
</style>