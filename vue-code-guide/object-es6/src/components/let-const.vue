<template>
    <div id="let-const">
        <span>{{msg}}</span>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){
            return {
                msg : ''
            };
        },
        mounted(){
            this.do_let();
        },
        computed:{},
        methods:{
            do_let(){
                {
                    let b = 1;
                    let a = [];
                    for(var i = 0;i<10;i++){
                        a[i] = function(){
                            console.info(i);
                            return i;
                        }
                    }
                    this.msg = a[6]();
                }

                {
                    let a = [];
                    for(let i=0;i<10;i++){
                        a[i] = function(){
                            console.info(i);
                            return i;
                        }
                    }
                    this.msg = a[6]();
                }
                
            }
        },
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 