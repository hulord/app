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
        component: () => import('../index/components/calendar/calendar'),
    },
    {
        id:'imgcalendar',
        pid:'4',
        name:'自定义日历组件',
        icon:'imgcalendar',
        path: '/imgcalendar',
        component: () => import('../index/components/imgcalendar/imgcalendar'),
    },
    {
        id:'content1',
        pid:'4',
        name:'自定义内容',
        icon:'content1',
        path: '/content',
        component: () => import('../index/components/content/content'),
    },
    {
        id:'login',
        pid:'4',
        name:'登录',
        icon:'login',
        path: '/login',
        component: () => import('../index/components/login'),
    }
  ];
  
export default {
    menuGlobal
}


