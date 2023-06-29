import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import Services from "@/pages/Services.vue";
import About from "@/pages/About.vue";
import Contacts from "@/pages/Contacts.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/services',
        component: Services
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contacts',
        component: Contacts
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router