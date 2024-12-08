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

    return { basketList, addToBasket, clearBasket }
})