import main from '@/components/main';

let BaseRouter = [
    {
        path : '/',
        name : 'pluyin',
        redirect : '/pluyin-vue-seamless-scroll',
        meta : {
            base : true,
            icon: 'md-person',
            title: '插件收集'
        },
        component: main,
        children : [
            {
                path : '/pluyin-vue-seamless-scroll',
                name : 'pluyin-vue-seamless-scroll',
                mate : {
                    title : '无缝滚动'
                },
                component : ()=>import('@/views/pluyin/vue-seamless-scroll.vue')
            },
            {
                path : '/pluyin-highcharts-networkgraph',
                name : 'pluyin-highcharts-networkgraph',
                mate : {
                    title : '力导图'
                },
                component : ()=>import('@/views/pluyin/highcharts-networkgraph.vue')
            }
        ]
    }
];

export default BaseRouter;