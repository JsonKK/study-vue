<template>
    <div>
        <h5>引入store的使用</h5>
        <p>{{message}}</p>
        <p>{{count}}</p>
        <button @click="_add({n:10})">+</button>
        <button @click="_addPlus">+Plus</button>
        <!-- 使用荷载的方式触发addPlus -->
        <button @click="$store.dispatch('addPlus')">使用荷载的方式触发addPlus</button>
    </div>
    
</template>
 
<script>
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
    export default {
        name: '',
        props:{},
        components: {},
        data(){
            return{
                countStep : 1
            }
        },
        mounted(){
            console.log(this.$store);
        },
        computed:{
            //从stroe中读取count
            // count(){
            //     return this.$store.state.count;
            // }
            //简化引入的方式
            // ...mapState({
            //     count : (state) => state.count
            // })
            //进一步简化引入的方式
            ...mapState(['count']),
            ...mapGetters(['count']),
            message(){
                let {countStep} = this;
                return  `计数器触发了${countStep}`;
            }
        },
        methods:{
            // _add(){
            //     // this.$store.commit('add',10);
            //     //使用对象传参
            //     // this.$store.commit('add',{n:10});
            //     //简化对象传参
            //     this.$store.commit({
            //         type : 'add',
            //         n : 10
            //     })
            // },
            //使用辅助函数引入
            ...mapMutations({
                _add : 'add'
            }),
            ...mapActions({
                _addPlus : 'addPlus'
            })
        },
        watch:{
            count(){
                this.countStep++;
            }
        },
        filters:{}
    }
</script>
 
<style></style>
 