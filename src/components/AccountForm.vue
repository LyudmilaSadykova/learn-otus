<template>
    <div v-if="savedData" class="resSendForm">
        Ваши данные сохранены успешно!
    </div>
    <div v-else>
        <div v-if="valid" class="valid">
            Проверьте правильность заполнения полей
        </div>
        <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
            <v-row>
                <v-col cols="5" class="left-col">Имя</v-col>
                <v-col cols="7">
                    <Field name="name" type="string" :value="accountStore.accountData?.name" />
                    <ErrorMessage name="name" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Фамилия</v-col>
                <v-col cols="7">
                    <Field name="surname" type="string" :value="accountStore.accountData?.surname" />
                    <ErrorMessage name="surname" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Email</v-col>
                <v-col cols="7">
                    <Field name="email" type="email" :value="accountStore.accountData?.email" />
                    <ErrorMessage name="email" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Дата рождения</v-col>
                <v-col cols="7">
                    <Field name="birthday" type="string" :value="accountStore.accountData?.birthday" />
                    <ErrorMessage name="birthday" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="5" class="left-col">Страна</v-col>
                <v-col cols="7">
                    <Field name="selectedCountry" as="select" :value="accountStore.accountData?.selectedCountry">
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
                    <Field name="address" type="string" :value="accountStore.accountData?.address" />
                    <ErrorMessage name="address" />
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" class="search-btn">
                    <button>
                        Сохранить
                    </button>
                </v-col>    
            </v-row>
        </Form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useAccountStore } from '../store/user';

const accountStore = useAccountStore();

const valid = ref(false)
const savedData = ref(false)

const schema = yup.object({
    name: yup.string().required(),
    surname: yup.string().required(),
    email: yup.string().required().email(),
    birthday: yup.date().required(),
    selectedCountry: yup.string().required().oneOf(["ru", "us", "au"]),
    address: yup.string().required(),
});

function onSubmit(values) {
    //alert(JSON.stringify(values, null, 2));
    accountStore.saveData(values);
    savedData.value = true;
}
function onInvalidSubmit({ values, errors, results }) {
    valid.value = true;
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