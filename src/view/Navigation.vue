<template>
    <div class="navigation">
        <span><router-link to="/">Главная</router-link></span>
        <span><router-link to="/products">Каталог</router-link></span>
        <span><router-link to="/basket">Корзина</router-link></span>
        <span><router-link to="/add-product">Добавить новый товар</router-link></span>
        <span v-if="!checkLogin"><router-link to="/login">Войти</router-link></span>
    </div>
</template>

<script setup>
import { computed } from 'vue';

const checkLogin = computed(() => {
    if (localStorage.getItem('token'))
        return true;

    return false;
})

</script>

<style scoped>
.navigation {
  margin: 20px 0;
}

.navigation > span {
    display: inline-block;
    padding: 7px 0;
    margin: 0 14px 0 0;
    cursor: pointer;
}

.navigation > span a {
    opacity: .7;
    text-decoration: none;
    color: #283593;
    font-weight: 600;
}

.navigation > span a:hover {
    opacity: 1;
}

.router-link-exact-active, .router-link-active {
    opacity: 1 !important;
    border-bottom: solid 2px;
    transition: .3s ease;
    border-color: #283593;
}
</style>