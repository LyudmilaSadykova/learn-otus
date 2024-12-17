import { mount } from '@vue/test-utils';
import component from '../src/components/ProductDetail.vue';
import { createTestingPinia } from '@pinia/testing';
import { useBasketStore } from '../src/store/basket';
import { useRoute } from 'vue-router';
import { expect, vi } from 'vitest';
import axios from 'axios';

vi.mock('vue-router');

const mockRoute = useRoute.mockImplementation(() => ({
    params: {
        productId: '1',
    },
}));

function getProductList(id) {
    return new Promise((resolve, reject) => {
        axios.get('https://fakestoreapi.com/products/' + id).then((result) => {
            setTimeout(resolve(result.data), 15000);
        }).catch((err) => {
            reject(err);
        })
    })
 }

 const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}};

describe('ProductDetail component', () => {
    const buildWrapper = () => mount(component, {
        global: {
            plugins: [createTestingPinia({
                createSpy: vi.fn,
                stubActions: false,
                initialState: {
                    basketList: []
                }}
            )],
        },
    });

    it('mount without errors', () => {
        const wrapper = buildWrapper();
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.element).toMatchSnapshot();
    });

    it('function exist', () => {
        expect(typeof getProductList).toBe('function');
      });

    it('load product sussess', async () => {
        return await expect(getProductList(1))
        .resolves
        .toStrictEqual({"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}})
    }, 15000);

    it('load product error', async () => {
        return await expect(getProductList(0))
        .resolves
        .toStrictEqual("")
    }, 15000);

    it('emit event add to cart', async () => {
        const wrapper = buildWrapper();

        const basket = useBasketStore();
        const button = wrapper.find('v-btn');
        expect(button.exists()).toBe(true);
        // await button.trigger('click');

        basket.addToBasket(product)
        basket.addToBasket(product)
        expect(basket.addToBasket).toHaveBeenCalledTimes(2);
        expect(basket.basketList.length).equal(2)
    });

});
