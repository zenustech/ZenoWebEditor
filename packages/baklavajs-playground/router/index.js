import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/home-view',
			component: () => import('../components/home-view.vue')
		},
		{
			path: '/subnet-view',
			component: () => import('../components/subnet-view.vue')
		},
		{
			path: '/search-view',
			component: () => import('../components/search-view.vue')
		},
		{
			path: '/settings-view',
			component: () => import('../components/settings-view.vue')
		},
	],
})

export default router