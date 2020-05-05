import main from '@/components/main';

let BaseRouter = [
    {
        path : '/',
        name : '_home',
        redirect : '/home',
        meta : {
            base : true,
            icon: 'md-person',
            title: 'iview'
        },
        component: main,
        children : [
            {
                path : '/home',
                name : 'home',
                mate : {
                    title : '首页'
                },
                component : ()=>import('@/views/main/home')
            },
            {
                path : '3dBanner',
                name : 'main3dBanner',
                mate : {
                    title : '3dbanner图'
                },
                component : ()=>import('@/views/main/3dBanner')
            },
            {
                path : 'canvasBall',
                name : 'canvasBall',
                mate : {
                    title : 'canvas球'
                },
                component : ()=>import('@/views/main/canvasBall')
            },
            {
                path : 'drag',
                name : 'drag',
                mate : {
                    title : '拖拽',
                },
                component : ()=>import('@/views/main/drag')
            }
        ]
    }
];

export default BaseRouter;