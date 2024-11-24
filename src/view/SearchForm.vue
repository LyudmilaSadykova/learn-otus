<template>
    <form @submit.prevent="$emit('searchForm', [name, price_from, price_to]);">
        <div class="search-form">
            <div class="search-block">
                <div>
                    <v-text-field 
                        v-model="name" 
                        label="Поиск по названию продукта"
                        type="text"
                    ></v-text-field>   
                </div>
                <div>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field
                                label="Поиск по цене от"
                                v-model="price_from"
                                prefix="$"
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6">
                            <v-text-field
                                label="Поиск по цене до"
                                v-model="price_to"
                                prefix="$"
                            ></v-text-field>
                        </v-col>
                    </v-row>        
                </div>
            </div>
            <div class="search-btn">
                <v-btn variant="tonal" @click="$emit('searchForm', [name, price_from, price_to]);">
                    Поиск
                </v-btn>
            </div>
        </div>   
    </form>     
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const price_from = ref(0)
const price_to = ref(1000)
</script>

<style scoped>
 .search-block {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    min-width: 300px;
}   

.search-form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0;
}

.search-btn {
    align-self: center;
}

.search-btn button {
    margin-left: 30px;
}

</style>