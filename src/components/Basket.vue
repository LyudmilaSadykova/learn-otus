<template>
    <div v-if="resSendForm" class="resSendForm">
        Ваш заказ отправлен успешно!
    </div>
    <div v-else>
        <ProductCard v-for="item in basketList" :key="item.id" :product="item" :add="false" />
        <div v-if="basketList.length" class="clear-btn">
            <v-btn @click="store.dispatch('clearBasket')">
                Очистить корзину
            </v-btn>
        </div>
        <div v-if="valid" class="valid">
            Проверьте правильность заполнения полей
        </div>
        <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
            <v-row>
                <v-col cols="5" class="left-col">Имя</v-col>
                <v-col cols="7">
                    <Field name="name" type="string" />
                    <ErrorMessage name="name" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Фамилия</v-col>
                <v-col cols="7">
                    <Field name="surname" type="string" />
                    <ErrorMessage name="surname" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Email</v-col>
                <v-col cols="7">
                    <Field name="email" type="email" />
                    <ErrorMessage name="email" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Дата рождения</v-col>
                <v-col cols="7">
                    <Field name="birthday" type="string" />
                    <ErrorMessage name="birthday" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Страна</v-col>
                <v-col cols="7">
                    <Field name="selectedCountry" as="select">
                        <option value="" disabled>Выберите страну</option>
                        <option value="ru">Россия</option>
                        <option value="us">Америка</option>
                        <option value="au">Австралия</option>
                    </Field>
                    <ErrorMessage name="selectedCountry" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Адрес</v-col>
                <v-col cols="7">
                    <Field name="address" type="string" />
                    <ErrorMessage name="address" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Номер карты</v-col>
                <v-col cols="7">
                    <Field name="card_number" type="number" />
                    <ErrorMessage name="card_number" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">CVV код карты</v-col>
                <v-col cols="7">
                    <Field name="card_cvv" type="number" />
                    <ErrorMessage name="card_cvv" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Имя владельца карты</v-col>
                <v-col cols="7">
                    <Field name="card_name" type="string" />
                    <ErrorMessage name="card_name" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="search-btn">
                    <button>
                        Отправить заказ
                    </button>
                </v-col>    
            </v-row>
        </Form>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import ProductCard from './ProductCard.vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import axios from 'axios';
import { useStore } from 'vuex';

const store = useStore();
const basketList = computed(() => store.getters.getBasketList);

const valid = ref(false)
const formData = ref([]);
const loading = ref(true);
const errorState = ref(false);
const resSendForm = ref(false);

const schema = yup.object({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().required().email(),
    birthday: yup.date().required(),
    selectedCountry: yup.string().required().oneOf(["ru", "us", "au"]),
    address: yup.string().required(),
    card_number: yup.number().required().min(16),
    card_cvv:yup.number().required().min(3),
    card_name:yup.string().required(),
});

function onSubmit(values) {
    //alert(JSON.stringify(values, null, 2));
    formData.value = {...basketList.value, ...values};
    //console.log(formData.value);
    sendOrder();
}
function onInvalidSubmit({ values, errors, results }) {
    valid.value = true;
}

const sendOrder = async () => {
  await axios.post('http://httpbin.org/post', formData.value)
  .then(response => {
    if (response.status === 200)
        resSendForm.value = true;
  })
  .catch(error => {
    errorState.value = true
    //console.log(error);
})
  .finally(() => loading.value = false)
}
</script>

<style scoped>
form {
    margin-top: 20px;
}
.valid {
    color: red;
    font-size: 16px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
}
input, select {
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
.clear-btn {
    justify-content: center;
    display: flex;
    margin-top: 20px;
}
button {
    border: 1px solid #283593;
    padding: 5px 10px;
    border-radius: 5px;
    color: #283593;
    background-color: #E8EAF6;
}
.resSendForm {
    color: #283593;
    font-size: 16px;
    margin-bottom: 10px;
    justify-content: center;
    display: flex;
}
</style>