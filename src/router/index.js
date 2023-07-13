import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/search',
        name: 'Search',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
    },
    {
        path: '/musicListDetalis',
        name: 'MusicListDetails',
        component: () => import(/* webpackChunkName: "musicListDetalis" */ '../views/MusicListDetails.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
    },
    {
        path: '/my',
        name: 'My',
        component: () => import(/* webpackChunkName: "my" */ '../views/My.vue'),
        //路由守卫
        beforeEnter(to, from, next) {
            if (store.state.isLogin) {
                next();
            } else {
                next('login');
            }
        },
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
router.beforeEach((to, from) => {
    console.log(to);
    if (to.path === "/login") {
        store.state.isPlayBarShow = false;
    } else if (to.path === '/search') {
        store.state.isPlayBarShow = false;
    } else {
        store.state.isPlayBarShow = true;
    }
})

export default router
