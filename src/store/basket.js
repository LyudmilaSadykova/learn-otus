import { defineStore } from "pinia";
import { ref } from "vue";

export const useBasketStore = defineStore('basket', () => {
    const basketList = ref([])

    function addToBasket(product) {
        basketList.value.push(product);
    }

    function clearBasket() {
        basketList.value = [];
    }

    function delToBasket(id) {
        basketList.value = JSON.parse(JSON.stringify(basketList.value.filter((item) => item.id !== id)));
    }

    return { basketList, addToBasket, clearBasket, delToBasket }
})