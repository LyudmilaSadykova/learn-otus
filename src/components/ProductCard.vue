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
                        v-model="rate"
                        half-increments
                        readonly
                        :length="5"
                        :size="32"
                    ></v-rating>
                </v-card-text>

                <v-card-actions>
                    <v-btn
                        variant="tonal"
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
                <v-img :src="props.product.image"></v-img>
            </v-avatar>
        </div>
            
    </v-card>
</template>

<script setup>
import { ref } from 'vue';
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const rate = ref(props.product.rating.rate);

</script>

<style scoped>
    
</style>