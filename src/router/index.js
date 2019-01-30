import Vue from 'vue'
import Router from 'vue-router' 
import Index from '@/pages/home/Index'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/addblog',
      name: 'add-blog',
      component: AddBlog
    },
    {
      path: '/showblog',
      name: 'show-blog',
      component: ShowBlog
    },
    {
      path: '/singleblog/:id',
      name: 'single-blog',
      component: SingleBlog
    }
  ]
})
