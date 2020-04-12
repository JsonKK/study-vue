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
            }
            
        ]
    }
];

export default BaseRouter;