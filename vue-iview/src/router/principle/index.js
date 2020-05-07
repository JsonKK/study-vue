import main from '@/components/main';

let BaseRouter = [
    {
        path : '/',
        name : '_object',
        redirect : '/object',
        meta : {
            base : true,
            icon: 'md-person',
            title: 'iview'
        },
        component: main,
        children : [
            {
                path : '/object',
                name : 'object',
                mate : {
                    title : '对象'
                },
                component : ()=>import('@/views/principle/object.vue')
            }
        ]
    }
];

export default BaseRouter;