import { createRouter, createWebHistory } from 'vue-router';

import  AdminDashboard  from './components/adminDashboard.vue';

import  UserDashboard  from './components/userDashboard.vue';

const routes = [
    {
        path     : '/',
        name     : 'admin-dashboard',
        component: AdminDashboard
    },
    {
        path     : '/user',
        name     : 'user-dashboard',
        component: UserDashboard
    }
];

export default createRouter({
    history: createWebHistory(),
    routes
});