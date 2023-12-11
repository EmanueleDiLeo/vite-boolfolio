import {createRouter, createWebHistory} from 'vue-router';

import Home from './pages/Home.vue'
import Project from './pages/Project.vue'
import ShowProject from './pages/ShowProject.vue'
import About from './pages/About.vue'
import Contact from './pages/Contact.vue'
import Error404 from './pages/Error404.vue'

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',

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
      path:'/info-progetto/:slug',
      name:'showProject',
      component:ShowProject,
    },
    {
      path:'/chi-siamo',
      name:'about',
      component:About,
    },
    {
      path:'/contatti',
      name:'contact',
      component:Contact,
    },
    //Si mette per ultimo perche altrimenti prende pure le rotte precedenti
    {
      path:'/:patMatch(.*)*',
      name: 'error-404',
      component:Error404,
    }
  ]
});

export {router};