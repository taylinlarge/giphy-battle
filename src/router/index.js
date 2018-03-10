import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Username from '@/components/Username'
import Submissions from '@/components/Submissions'
import FindGiphy from '@/components/FindGiphy'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
    	path: '/username',
    	name: 'Username',
    	component: Username
    },
    {
    	path: '/submissions',
    	name: 'Submissions',
    	component: Submissions
    },
    {
    	path: '/findgiphy',
    	name: 'FindGiphy',
    	component: FindGiphy
    }
  ]
})
