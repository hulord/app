const menuGlobal=[
    {
        id:'login',
        pid:'0',
        name:'登录',
        icon:'user',
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
    }
  ];
  
export default {
    menuGlobal
}


