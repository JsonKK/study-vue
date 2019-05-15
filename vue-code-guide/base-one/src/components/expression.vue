<template>
    <div id="">
        <h4>{{childText}}</h4>
        <div class="name">
            <input type="text" v-model.lazy="name" placeholder="输入英文名" @blur="blurName(name)"/>
            <span>首字母大写：</span><span>{{name | capitalize}}</span>
        </div>
        <div>
            <input type="text" v-model="searchText">
        </div>
        <ul class="item-name">
            <li v-for="(value,index) in users" :key="index">{{value.name | disposeName(searchText)}}</li>
        </ul>
        <ul class="repeat-object">
            <li v-for="(value,key) in primitiveValues" :key="key">{{key}} : {{value}}</li>
            <li>=====</li>
            <li v-for="(value,key,index) in objectValues" :key="key">{{index}} - {{key}} : {{value.msg}}</li>
        </ul>
        <ul v-if="nameList.length>0">
            <li v-for="(item,index) in nameList" :key="index">{{item.name}}</li>
        </ul>
    </div>
</template>
 
<script>
    export default {
        name: 'expression',
        props:{
            childText : {
                type : String
            }
        },
        components: {},
        data(){
            return{
                name : '',
                searchText:'',
                nameList : [],
                primitiveValues : {
                    firstName : 'DIDI',
                    lastName : 'FE',
                    Age : 4
                },
                objectValues : {
                    one : {
                        msg : 'Hello'
                    },
                    two : {
                        msg : 'DIDI'
                    }
                },
                users : [
                    {
                        name : '快车',
                        tag : 1
                    },
                    {
                        name : '出租车',
                        tag : 2
                    },
                    {
                        name : '顺风车',
                        tag : 3
                    },
                    {
                        name : '专车',
                        tag : 4
                    }
                ]
            }
        },
        mounted(){},
        computed:{},
        methods:{
            blurName(val){
                if(val){
                    this.nameList.push({name:val});
                    // this.childText = val;
                    this.$emit('update:childText', val)
                }
                
            }
        },
        watch:{
            nameList:{
                handler : function(val,oldval){
                    let v = val;
                },
                deep:true
            }
        },
        filters:{
            capitalize: function (value,o) {
                if (!value) return ''
                value = value.toString()
                return value.charAt(0).toUpperCase() + value.slice(1)
            },
            disposeName: function(value,searchText){
                if(value == searchText || !searchText){
                    return value;
                }
            }
        }
    }
</script>
 
<style></style>
 