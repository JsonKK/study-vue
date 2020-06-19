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
            },
            {
                path : '/var-model',
                name : 'varModel',
                mate : {
                    title : '自定义组件v-model'
                },
                component : ()=>import('@/views/principle/var-model.vue')
            },
            {
                path : '/listeners',
                name : 'listeners',
                mate : {
                    title : '事件回传'
                },
                component : ()=>import('@/views/principle/listeners.vue')
            }
        ]
    }
];

export default BaseRouter;