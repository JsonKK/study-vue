import main from '@/components/main';

let BaseRouter = [
    {
        path : '/',
        name : 'principle',
        redirect : '/object-base',
        meta : {
            base : true,
            icon: 'md-person',
            title: '原理及算法'
        },
        component: main,
        children : [
            {
                path : '/object-base',
                name : 'objectBase',
                mate : {
                    title : '对象'
                },
                component : ()=>import('@/views/principle/object-base.vue')
            }
        ]
    }
];

export default BaseRouter;