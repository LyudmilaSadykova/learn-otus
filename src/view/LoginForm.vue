<template>
    <h1>Войти в аккаунт</h1>
    <div v-if="valid" class="valid">
        Проверьте правильность заполнения полей
    </div>
    <Form @submit="onSubmit" :validation-schema="schema" @invalid-submit="onInvalidSubmit">
        <v-row>
            <v-col cols="5" class="left-col">Логин</v-col>
            <v-col cols="7">
                <Field name="login" type="string" />
                <ErrorMessage name="login" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5" class="left-col">Пароль</v-col>
            <v-col cols="7">
                <Field name="password" type="password" />
                <ErrorMessage name="password" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="search-btn">
                <button>
                    Войти
                </button>
            </v-col>    
        </v-row>
    </Form>
</template>

<script setup>
import { ref } from 'vue';
import { Form, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { useRouter } from 'vue-router';
import { useAccountStore } from '../store/user';

const accountStore = useAccountStore();

const valid = ref(false)

const schema = yup.object({
    login: yup.string().required(),
    password: yup.string().min(6).required(),
});

const router = useRouter();

function onSubmit(values) {
    accountStore.loginUser(values.login + values.password);
    router.push({ name: 'account' });
}

function onInvalidSubmit({ values, errors, results }) {
    valid.value = true;
}
</script>

<style scoped>
h1 {
  color: #283593;
  text-align: center;
}
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
button {
    border: 1px solid #283593;
    padding: 5px 10px;
    border-radius: 5px;
    color: #283593;
    background-color: #E8EAF6;
}
</style>