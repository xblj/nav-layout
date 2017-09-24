import index from '@/pages/layout/index'
import Top11 from '@/pages/top1/List1_1'
import Top12 from '@/pages/top1/List1_2'
import Top21 from '@/pages/top2/List2_1'
import Top22 from '@/pages/top2/List2_2'
import EmptyView from '@/components/EmptyView'
// function emptyView () {
//   return {template: '<router-view></router-view>'}
// }

const routes = [
  {
    path: '/',
    name: 'home',
    component: index
  },
  {
    path: '/top1',
    name: 'top1',
    title: '顶部1',
    redirect: '/top1/left1/left1_1',
    component: index,
    children: [
      {
        path: 'left1',
        name: 'top1_left1',
        title: 'top1_左导航1',
        component: EmptyView,
        children: [
          {
            path: 'left1_1',
            name: 'top1_left1_1',
            title: 'top1_左导航1_1',
            component: Top11
          },
          {
            path: 'left1_2',
            name: 'top1_left1_2',
            title: 'top1_左导航1_2',
            component: Top12
          }
        ]
      }
    ]
  },
  {
    path: '/top2',
    name: 'top2',
    title: '顶部2',
    component: index,
    redirect: '/top2/left1/left1_1',
    children: [
      {
        path: 'left1',
        name: 'top2_left1',
        title: '左导航1',
        component: EmptyView,
        children: [
          {
            path: 'left1_1',
            name: 'top2_left1_1',
            title: '左导航1_1',
            component: Top21
          },
          {
            path: 'left1_2',
            name: 'top2_left1_2',
            title: '左导航1_2',
            component: Top22
          }
        ]
      },
      {
        path: 'left2',
        name: 'top2_left2',
        title: '左导航2',
        component: EmptyView,
        children: [
          {
            path: 'left2_1',
            name: 'top2_left2_1',
            title: '左导航2_1',
            component: Top21
          },
          {
            path: 'left2_2',
            name: 'top2_left2_2',
            title: '左导航2_2',
            component: Top22
          }
        ]
      }
    ]
  }
]
export default routes
