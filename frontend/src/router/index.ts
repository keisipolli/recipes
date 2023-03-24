import {createRouter, createWebHistory} from 'vue-router';

// Import your components here
// @ts-ignore
import Home from '../views/Home.vue';
import Recipes from '../views/Recipes.vue';
import SignUp from '../views/SignUp.vue';
import SignIn from '../views/SignIn.vue';

const routes = [

    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/recipes',
        name: 'Recipes',
        component: Recipes,
    },
    {
        path: '/signup',
        name: 'Sign Up',
        component: SignUp,
    },
    {
        path: '/signin',
        name: 'Sign In',
        component: SignIn,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;