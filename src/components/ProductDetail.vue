<template>
    <div class="detail">
        <v-card
            color="indigo-darken-3"
            variant="text"
            class="mx-auto"
            hover
            >
            <v-card-title>
                {{ product.title }}
            </v-card-title>

            <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                    <v-card-subtitle>
                        {{ product.category }}
                    </v-card-subtitle>

                    <v-card-text>
                        {{ product.description }}    
                    </v-card-text>
                    <v-card-text>
                        Price: {{ product.price }}$
                    </v-card-text>
                    <v-card-text v-if="product.rating">
                        <v-rating
                            :modelValue="product.rating.rate"
                            readonly
                            :length="5"
                        ></v-rating>
                    </v-card-text>

                    <v-card-actions>
                        <v-btn
                            variant="tonal"
                            @click="basketStore.addToBasket(product)"
                        >
                            Добавить в корзину
                        </v-btn>
                    </v-card-actions>
                </div>

                <v-avatar
                    class="ma-3"
                    rounded="0"
                    size="200"
                >
                    <v-img
                        v-if="product.image"
                        :src="product.image"></v-img>
                    <div 
                        v-else 
                        class="box"></div>    
                </v-avatar>

            </div>
                
        </v-card>
     </div>   
</template>

<script setup>
import { useProduct } from '../custom/useProduct';
import { useRoute } from 'vue-router';
import { useBasketStore } from '../store/basket';

const basketStore = useBasketStore();

const route = useRoute();
const { loading, errorState, product } = useProduct(route.params.productId);

</script>

<style scoped>
.detail {
    display: flex;
    justify-content: center;
}
</style>