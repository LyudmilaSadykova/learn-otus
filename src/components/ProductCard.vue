<template>
    <v-card
        color="indigo-darken-3"
        variant="outlined"
        class="mx-auto"
        hover
        >
        <v-card-title>
            {{ props.product.title }}
        </v-card-title>

        <div class="d-flex flex-no-wrap justify-space-between">
            <div>
                <v-card-subtitle>
                    {{ props.product.category }}
                </v-card-subtitle>

                <v-card-text>
                    {{ props.product.description }}    
                </v-card-text>
                <v-card-text>
                    Price: {{ props.product.price }}$
                </v-card-text>
                <v-card-text>
                    <v-rating
                        :modelValue="props.product.rating.rate"
                        readonly
                        :length="5"
                    ></v-rating>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        v-if="props.add"
                        variant="tonal"
                        @click="basketStore.addToBasket(props.product)"
                    >
                        Добавить в корзину
                    </v-btn>
                    <v-btn
                        variant="tonal"
                        @click="router.push({name: 'product', params: { productId: props.product.id }})"
                    >
                        Подробнее
                    </v-btn>
                </v-card-actions>
            </div>

            <v-avatar
                class="ma-3"
                rounded="0"
                size="200"
            >
                <v-img
                    v-if="props.product.image"
                    :src="props.product.image"></v-img>
                <div 
                    v-else 
                    class="box"></div>    
            </v-avatar>

        </div>
            
    </v-card>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { useBasketStore } from '../store/basket';

const basketStore = useBasketStore();
const router = useRouter();
const props = defineProps({
    product: {
        type: Object,
        required: true
    },
    add: {
        type: Boolean,
        default: true,
        required: false
    },
})

</script>

<style scoped>
 .box {
    background-color: #283593;
    width: 200px;
    height: 200px;
 }   
</style>