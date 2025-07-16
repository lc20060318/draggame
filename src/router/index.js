import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'all-project',
      component: () => import('@/Allproject.vue'),
    },
    {
        path:'/project4',
        name:'project4',
        component:() => import('@/views/Projectfour.vue')
    },
    {
        path:'/project5',
        name:'project5',
       component:() => import('@/views/Projectfive.vue')
    },
    {
        path:'/project9',
        name:'project9',
         component:() => import('@/views/Projectnine.vue')
    },
    {
        path:'/project10',
        name:'project10',
        component:() => import('@/views/Projectten.vue')

    },
    {
        path:'/project11',
        name:'project11',
        component:() => import('@/views/projecteleven.vue')
    }
  ],
})

export default router