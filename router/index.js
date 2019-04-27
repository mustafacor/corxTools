import Vue from 'vue';
import Router from 'vue-router';
import todo from '@/components/tools/todo';
import httpheader from '@/components/tools/httpheader';
import getsiteimages from '@/components/tools/getsiteimages';
import searchgif from '@/components/tools/searchgif';
import anasayfa from '@/components/tools/anasayfa';
import passwordgenerator from '@/components/tools/passwordgenerator';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/pg',
      name: 'passwordgenerator',
      component: passwordgenerator,
    },
    {
      path: '/todo',
      name: 'todo',
      component: todo,
    },
    {
      path: '/getData',
      name: 'getData',
      component: httpheader,
    }, 
    {
      path: '/getsiteimages',
      name: 'getsiteimages',
      component: getsiteimages,
    },
    {
      path: '/searchgif',
      name: 'searchgif',
      component: searchgif,
    },
    {
      path: '/',
      name: 'sanasayfa',
      component: anasayfa,
    },
  ],
});
