<template>
    <div>
        <form @submit.prevent="submitForm" v-if="!hideForm">
            <div class="add-form ">
                <div>
                    <v-text-field 
                        v-model="category" 
                        label="Категория"
                        type="text"
                        v-bind="categoryAttrs"
                        :hint="errors.category"
                        :error="errors.category ? true : false"
                        persistent-hint
                    ></v-text-field> 
                </div>
                <div>
                    <v-text-field 
                        v-model="title" 
                        label="Заголовок"
                        type="text"
                        v-bind="titleAttrs"
                        :hint="errors.title"
                        :error="errors.title ? true : false"
                        persistent-hint
                    ></v-text-field>   
                </div>
                <div>
                    <v-text-field 
                        v-model="description" 
                        label="Описание"
                        type="text"
                        v-bind="descriptionAttrs"
                        :hint="errors.description"
                        :error="errors.description ? true : false"
                        persistent-hint
                    ></v-text-field>   
                </div>
                <div>
                    <v-text-field 
                        v-model="price" 
                        label="Цена"
                        type="number"
                        v-bind="priceAttrs"
                        :hint="errors.price"
                        :error="errors.price ? true : false"
                        persistent-hint
                    ></v-text-field>   
                </div>
            </div>
            <div>
                <v-btn variant="tonal" @click="submitForm">
                    Добавить продукт
                </v-btn>
            </div>
        </form>   
        <div class="hideForm" v-else>  
            Товар добавлен в каталог
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useForm } from 'vee-validate';
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';

const emit = defineEmits(['addProduct'])
const hideForm = ref(false);

const schema = toTypedSchema(
  yup.object({
    category: yup.string().required(),
    title: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().required(),
  }),
);
const { errors, values, defineField } = useForm({
  validationSchema: schema,
});

const [category, categoryAttrs] = defineField('category');
const [title, titleAttrs] = defineField('title');
const [description, descriptionAttrs] = defineField('description');
const [price, priceAttrs] = defineField('price');

const submitForm = () => {
    if (Object.keys(errors.value).length || !values.category || !values.title || !values.description || !values.price) {
        return false;
    }

    emit('addProduct', values);

    hideForm.value= true;
}

</script>

<style scoped>
.add-form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0;
    width: 50%;
}
.hideForm {
    color: #283593;
    font-size: 16px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
}
</style>