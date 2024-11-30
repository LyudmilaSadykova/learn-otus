import { onMounted, ref } from 'vue';
import axios from 'axios';

export function useCatalog() {
    const loading = ref(false);
    const errorState = ref(false);
    const productList = ref([]);

    async function getProductList() {
        loading.value = true;

        await axios.get('https://fakestoreapi.com/products')
        .then(response => {
          productList.value = response.data;
          //console.log(productList.value);
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
    //loading,
    //errorState,
    productList
  };
}