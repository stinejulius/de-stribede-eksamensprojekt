import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const Placeholder = { template: '<div></div>' }

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/membership',
      name: 'membership',
      component: Placeholder,
    },
    {
      path: '/webshop',
      name: 'webshop',
      component: Placeholder,
    },
    {
      path: '/responsible-gambling',
      name: 'responsible-gambling',
      component: Placeholder,
    },
    {
      path: '/privacy-policy',
      name: 'privacy-policy',
      component: Placeholder,
    },
    {
      path: '/terms-and-conditions',
      name: 'terms-and-conditions',
      component: Placeholder,
    },
    {
      path: '/news',
      name: 'news',
      component: Placeholder,
    },
    {
      path: '/news/kom-med-på-saesonens-sidste-udebanetur',
      name: 'news-kom-med-på-saesonens-sidste-udebanetur',
      component: Placeholder,
    },
    {
      path: '/news/fodboldfestival-på-flakhaven',
      name: 'news-fodboldfestival-på-flakhaven',
      component: Placeholder,
    },
    {
      path: '/news/ob-er-tilbage-i-superligaen',
      name: 'news-ob-er-tilbage-i-superligaen',
      component: Placeholder,
    },
    {
      path: '/busrides',
      name: 'busrides',
      component: Placeholder,
    },
    {
      path: '/songbook',
      name: 'songbook',
      component: Placeholder,
    },
    {
      path: '/about',
      name: 'about',
      component: Placeholder,
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: Placeholder,
    },
    {
      path: '/statutes',
      name: 'statutes',
      component: Placeholder,
    },
    {
      path: '/tifo-odense',
      name: 'tifo-odense',
      component: Placeholder,
    },
    {
      path: '/fanmap',
      name: 'fanmap',
      component: Placeholder,
    },
    {
      path: '/login',
      name: 'login',
      component: Placeholder,
    },
    {
      path: '/basket',
      name: 'basket',
      component: Placeholder,
    },
  ],
})

export default router
