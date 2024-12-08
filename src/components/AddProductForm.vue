<template>
    <div>
        <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit" v-if="!hideForm">
            <v-row>
                <v-col cols="5" class="left-col">Категория</v-col>
                <v-col cols="7">
                    <Field name="category" type="string" />
                    <ErrorMessage name="category" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Заголовок</v-col>
                <v-col cols="7">
                    <Field name="title" type="string" />
                    <ErrorMessage name="title" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Описание</v-col>
                <v-col cols="7">
                    <Field name="description" type="text" />
                    <ErrorMessage name="description" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Цена</v-col>
                <v-col cols="7">
                    <Field name="price" type="number" />
                    <ErrorMessage name="price" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="search-btn">
                    <button>
                        Добавить продукт
                    </button>
                </v-col>    
            </v-row>
        </Form>
        <div class="hideForm" v-else>  
            Товар добавлен в каталог
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useCatalogStore } from '../store/catalog';

const catalogStore = useCatalogStore();
const valid = ref(false)
const hideForm = ref(false);

const schema = yup.object({
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
});

function onInvalidSubmit({ values, errors, results }) {
    valid.value = true;
}

function onSubmit(values) {
    //alert(JSON.stringify(values, null, 2));
    let product = {
        id: catalogStore.productList.length + 1,
        category: values.category,
        title: values.title,
        price: values.price,
        description: values.description,
        image: '',
        rating: {
            rate: 5,
            count: 1,
        }
    }

    catalogStore.addProduct(product);

    hideForm.value= true;
}

</script>

<style scoped>
.valid {
    color: red;
    font-size: 16px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
}
input {
    border: 1px solid #283593;
    line-height: 30px;
    border-radius: 5px;
    margin-right: 15px;
    min-width: 300px;
    color: #283593;
}
.left-col {
    justify-content: right;
    display: flex;
    color: #283593;
}
.search-btn {
    justify-content: center;
    display: flex;
}
button {
    border: 1px solid #283593;
    padding: 5px 10px;
    border-radius: 5px;
    color: #283593;
    background-color: #E8EAF6;
}
.hideForm {
    color: #283593;
    font-size: 16px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
}
</style>