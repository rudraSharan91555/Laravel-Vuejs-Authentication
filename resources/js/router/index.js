import { createRouter, createWebHistory } from "vue-router";
import About from "../components/About.vue";
import Home from "../components/Home.vue";
import Register from "../components/Auth/Register.vue";
import Login from "../components/Auth/Login.vue";
import Dashboard from "../components/Dashboard.vue";
import NotFound from "../components/Error/404.vue"; 


const routes =[
    {
        path: '/:any',
        name: 'notfound',
        component: NotFound
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/dashboard',
        name: 'Dasboard',
        component: Dashboard

    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;