import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";

export const useCatalogStore = defineStore('catalog', () => {
    const loading = ref(false);
    const productList = ref([])
    const filters = ref([])

    async function loadProducts() {
        loading.value = true;

        await axios.get('https://fakestoreapi.com/products')
        .then(response => {
            productList.value = response.data
            //console.log(productList.value);
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => loading.value = false)
    }

    const productListHome = computed(() => [...productList.value].splice(0, 4))

    function updateFilters(filterList) {
        filters.value = filterList;
    }

    const productListFiltered = computed(() => {
        return [...productList.value].filter((product) => 
            ((!filters.value[0] || filters.value[0] && product.title.indexOf(filters.value[0]) > -1) &&
            (!filters.value[1] || filters.value[1] && product.price > filters.value[1]) && (!filters.value[2] || filters.value[2] && product.price < filters.value[2]))
          );
    })

    function addProduct(product) {
        productList.value.push(product);
    }

    return { loading, productList, loadProducts, productListHome, updateFilters, productListFiltered, addProduct }
})