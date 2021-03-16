import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Money from '@/views/Money.vue';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import Found404 from '@/views/Found404.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        component: Money
    },
    {
        path: '/money',
        name: 'Money',
        component: Money
    },
    {
        path: '/labels',
        name: 'labels',
        component: Labels
    },
    {
        path: '/statistics',
        name: 'statistics',
        component: Statistics
    },
    {
        path:'*',
        component:Found404
    }
];

const router = new VueRouter({
    routes
});

export default router;
