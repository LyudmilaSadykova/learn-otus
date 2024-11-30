import { onMounted, ref } from 'vue';
import axios from 'axios';

export function useProduct(id) {
    const loading = ref(false);
    const errorState = ref(false);
    const product = ref({});

    async function getProductList() {
        loading.value = true;

        await axios.get('https://fakestoreapi.com/products/' + id)
        .then(response => {
          product.value = response.data;
          //console.log(product.value);
        })
        .catch(error => {
          //console.log(error);
          errorState.value = true;
        })
        .finally(() => loading.value = false)
      }

    onMounted(() => {
      getProductList(); 
    });
    

  return {
    loading,
    errorState,
    product
  };
}