import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import project from '@/components/project/project'
import release from '@/components/release/release'
import turn from '@/components/turn/turn'
import my from '@/components/my/my'
import hello from '@/components/page/Hello'
import NavPage from '@/components/navPage'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/navPage/index'
    },
    {
      path: '/navPage',
      component: NavPage,
      children: [
        {
          path: 'index',
          component: index
        },
        {
          path: 'turn',
          component: turn
        },
        {
          path: 'project',
          component: project
        },
        {
          path: 'my',
          component: my
        },
        {
          path: 'release',
          component: release
        }
      ]
    },
    {
      path: '/hello',
      component: hello
    }
  ]
})
