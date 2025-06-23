import { createRouter, createWebHistory } from 'vue-router'

const routes = [{
    path: '/',
    name: 'home',
    component: () => import('@/pages/dashboard.vue'),
    children: [
        {
            path: '/',
            redirect: '/config'
        },
        {
            path: '/config',
            name: 'config',
            component: () => import('@/pages/config.vue'),
            beforeEnter: () => {
                console.log('router init !')
            }
        }, {
            path: '/business',
            name: 'business',
            component: () => import('@/pages/business.vue')
        }, {
            path: '/config-type',
            name: 'config-type',
            component: () => import('@/pages/config-type.vue')
        }, {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('@/pages/dashboard.vue')
        }
    ]
}];

export default createRouter({
    history: createWebHistory(),
    routes
})