import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import ProductCatalog from "../components/ProductCatalog.vue";
import ProductCard from "../components/ProductCard.vue";
import Basket from "../components/Basket.vue";
import AddProductForm from "../components/AddProductForm.vue";
import Page404 from "../view/Page404.vue";
import LoginForm from "../view/LoginForm.vue";
import ProductDetail from "../components/ProductDetail.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home,
      },
      {
        path: '/products',
        name: 'products',
        props: true,
        component: ProductCatalog,
      },
      {
        path: '/product/:productId',
        name: 'product',
        props: true,
        component: ProductDetail
      },
      {
        path: '/basket',
        name: 'basket',
        component: Basket
      },
      {
        path: '/add-product',
        name: 'add-product',
        component: AddProductForm
      },
      {
        path: '/login',
        name: 'login',
        component: LoginForm
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: Page404
      }
    ],
    scrollBehavior: () => ({ top: 0 }), // скролл вверх по странице
  })

  router.beforeEach((to, from, next) => {
    if (to.name === 'add-product')
      if (!localStorage.getItem('token') && to.name !== 'login')
        next({ name: 'login' })
      
    next()
  })

  export default router;
