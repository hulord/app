const menuGlobal=[
    {
        id:'login',
        pid:'1',
        name:'登录',
        icon:'login',
        path: '/login',
        component: () => import('../index/components/login'),
    }, 
    {
        id:'home',
        pid:'0',
        name:'首页',
        icon:'user',
        path: '/',
        component: () => import('../index/components/layout/Header'),
    },
    {
        id:'layout',
        pid:'2',
        name:'布局文件',
        icon:'layout',
        path: '/layout',
        component: () => import('../index/components/layout/Layout'),
    },
    {
        id:'calendar',
        pid:'3',
        name:'日历组件',
        icon:'calendar',
        path: '/calendar',
        component: () => import('../index/components/calendar/calendar.js'),
    }
  ];
  
export default {
    menuGlobal
}


