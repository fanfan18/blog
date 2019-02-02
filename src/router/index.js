import Vue from 'vue'
import Router from 'vue-router' 
import Index from '@/pages/home/Index'
import AddBlog from '@/components/AddBlog'
import ShowBlog from '@/components/ShowBlog'
import SingleBlog from '@/components/SingleBlog'
import EditBlog from '@/components/EditBlog'
import CateBlog from '@/components/CateBlog'

Vue.use(Router)

 var router = new Router({
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
    },
    {
      path: '/editblog/:id',
      name: 'edit-blog',
      component: EditBlog
    },
    {
      path: '/cateblog/:id',
      name: 'cate-blog',
      component: CateBlog
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
 
export default router
