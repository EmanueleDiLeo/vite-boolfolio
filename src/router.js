import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue'
import Project from './pages/Project.vue'
import About from './pages/About.vue'
import Error404 from './pages/Error404.vue'

const router = createRouter({
  history: createWebHistory(),

  routes:[
    {
      path:'/',
      name:'home',
      component:Home,
    },
    {
      path:'/progetti',
      name:'project',
      component:Project,
    },
    {
      path:'/chi-siamo',
      name:'about',
      component:About,
    },
    //Si mette per ultimo perche altrimenti prende pure le rotte precedenti
    {
      path:'/:patMatch(.*)*',
      component:Error404,
    }
  ]
});

export {router};