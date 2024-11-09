<template>
  <div>
    <h2>Введите свой вес в кг</h2>
    <p><input type="number" v-model="kg" @change="calc" /></p>
    <h3 v-if="water">Ваша норма воды в день: {{ water }} л</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const kg = ref(0);
const water = ref(0);
const calc = () => {
  water.value = Number(kg.value)*0.03;
};
</script>

<style scoped>
input {
  font-size: 20px;
  line-height: 22px;
}
</style>