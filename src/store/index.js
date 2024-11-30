import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
    state: {
        productList: [],
        filters: [],
        basketList: []
    },
    getters: {
        getProducts(state) {
          return state.productList;
        },
        filteredProducts(state) {
            return [...state.productList].filter((product) => 
                ((!state.filters[0] || state.filters[0] && product.title.indexOf(state.filters[0]) > -1) &&
                (!state.filters[1] || state.filters[1] && product.price > state.filters[1]) && (!state.filters[2] || state.filters[2] && product.price < state.filters[2]))
              );
        },
        getBasketList(state) {
            return state.basketList;
        }
    },
    mutations: {
        SET_PRODUCTS(state, products) {
            state.productList = products;
        },
        PUSH_PRODUCT(state, product) {
            state.productList.push(product);
        },
        SET_FILTERS(state, filterList) {
            state.filters = filterList;
        },
        PUSH_BASKET(state, product) {
            state.basketList.push(product);
        },
        SET_BASKET(state) {
            state.basketList = [];
        },
    },
    actions: {
        /*async loadProducts({ commit }) {
            await axios.get('https://fakestoreapi.com/products')
            .then(response => {
                commit('SET_PRODUCTS', response.data)
                //console.log(productList.value);
            })
            .catch(error => {
                console.log(error);
            })
        },*/
        updateProducts({ commit }, productList) {
            commit('SET_PRODUCTS', productList)
        },
        addProduct({ commit }, product) {
            commit('PUSH_PRODUCT', product)
        },
        updateFilters({ commit }, filterList) {
            commit('SET_FILTERS', filterList)
        },
        addToBasket({ commit }, product) {
            commit('PUSH_BASKET', product)
        },
        clearBasket({ commit }) {
            commit('SET_BASKET')
        },
    }
    
})