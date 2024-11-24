<template>
  <div class="header">
    <div class="tabs_switcher">
      <span v-for="(curr, idx) in tabs"
            :key="idx"
            @click="tab = curr"
            :class="{active: tab === curr}">
          <h4>{{ curr }}</h4>
      </span>
    </div>
    <div>
      <SearchForm v-show="tab === 'Каталог товаров'" @searchForm="$emit('searchForm', $event)" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SearchForm from '../../view/SearchForm.vue';

const tab = defineModel('tab')
const tabs = ref(['Каталог товаров', 'Добавить новый товар', 'Корзина'])
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-around;
}

.tabs_switcher {
  margin: 20px 0;
}

.tabs_switcher > span {
    display: inline-block;
    padding: 7px 0;
    margin: 0 14px 0 0;
    cursor: pointer;
    border-bottom: solid 2px;
    border-color: transparent;
    opacity: .7;
    transition: .3s ease;
    color: #283593;
}

.tabs_switcher > span:hover {
    opacity: 1;
}

.tabs_switcher > span.active {
    opacity: 1;
    border-color: #283593;
}
</style>