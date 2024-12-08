import { defineStore } from "pinia";
import { ref } from "vue";

export const useAccountStore = defineStore('account', () => {
    const accountData = ref([])
    const isAuth = ref(false)

    function saveData(data) {
        accountData.value = data;
    }

    function loginUser(token) {
        localStorage.setItem('token', token);
        isAuth.value = true;
    }

    function logoutUser() {
        localStorage.removeItem('token');
        isAuth.value = false;
    }

    return { accountData, isAuth, saveData, loginUser, logoutUser }
})