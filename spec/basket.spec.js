import { setActivePinia, createPinia } from 'pinia'
import { useBasketStore } from '../src/store/basket';

describe('Basket Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  const product = {"id":1,"title":"Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops","price":109.95,"description":"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday","category":"men's clothing","image":"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg","rating":{"rate":3.9,"count":120}};

  it('Add to basket valid', () => {
    const basket = useBasketStore()

    expect(basket.basketList).toStrictEqual([])
    basket.addToBasket(product)
    expect(basket.basketList).toStrictEqual([product])
  })

  it('Delete from basket valid', () => {
    const basket = useBasketStore()

    basket.clearBasket()
    expect(basket.basketList).toStrictEqual([])
  })

})