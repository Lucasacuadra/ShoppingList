import VueRouter from 'vue-router';
import getAllIngredients from '../components/getAllIngredients.vue'
import IngredientsByStore from '../components/IngredientsByStore.vue'

const routes = [
    {
        path: '/shoppinglist',
        name: 'Shoppinglist',
        component: getAllIngredients
    },
    {
        path: '/shoppinglist/:store',
        name: 'SingleShoppinglist',
        props: 'store',
        component: IngredientsByStore
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router