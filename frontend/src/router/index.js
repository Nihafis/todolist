import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/App.vue';
import AddTask from '@/components/Todo.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/addtask', name: 'AddTask', component: AddTask },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
