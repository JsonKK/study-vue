<template>
    <div id="">
        <input type="text" v-model="family" />
        <input type="text" v-model="didi" />
        <br/>
        didi={{didi}}, family={{family}}, didiFamily={{didiFamily}}

        <div class="example">
            <button @click="toggleShow"> toggle show total price</button>
            <p v-if="showTotal">total price = {{totalPrice}}</p>
        </div>
    </div>
</template>
 
<script>
    export default {
        name: 'computed',
        props:{},
        components: {},
        data(){
            return {
                family : '',
                didi : '',
                showTotal : true,
                basePrice : 100
            }
        },
        mounted(){
            this.didiFamily = 'fds-fds'
            setInterval((self)=>{
                self.basePrice = self.basePrice + 2;
            },1000,this);
        },
        computed:{
            totalPrice : function(){
                return this.basePrice + 1;
            },
            didiFamily : {
                get : function(){
                    return this.didi + '-' + this.family;
                },
                //直接赋值didifamily时候调用set方法
                set : function(val){
                    let names = val.split('-');
                    this.didi = names[0]+1;
                    this.family = names[1]+2;
                }
            }
        },
        methods:{
            toggleShow(){
                this.showTotal = !this.showTotal;
            }
        },
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 