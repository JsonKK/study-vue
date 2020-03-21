<template>
    <div class="contain">
        <section class="list">
            <!-- <ul class="ul">
                <template v-for="(item,index) in list">
                    <li class="item " :key="index">
                        <div :class="['min-box',{'animated bounceIn':index == 0 && openAnimate == true}]">
                            <div class="emoji">{{item.face}}</div>
                            <p class="title">{{item.word}}</p>
                        </div>
                    </li>
                </template>
            </ul> -->
            <div class="list-box" ref="list">
                <ul :class="['row',{'animated flipInX' : listIndex == animateIndex}]" v-for="(minList,listIndex) in list" :key="listIndex">
                    <li :class="['item',{'animated bounceIn':item.animated}]" v-for="(item,index) in minList" :key="index">
                        <div class="min-box">
                            <div class="emoji">{{item.face}}</div>
                            <p class="title">{{item.word}}</p>
                        </div>
                    </li>
                </ul>
            </div>
            
        </section>
        <section class="search">
            <div class="search-box">
                <row>
                    <i-col span="8" offset="8">
                        <Input search placeholder="Enter something Words..." ref="search" v-model="word" @on-enter="submit" />
                    </i-col>
                </row>
                <row>
                    <i-col span="12" offset="6">
                        <ul class="hint-list">
                            <template v-for="(item,index) in hintList">
                                <Tooltip content="不懂来撩我" placement="bottom" :key="index">
                                    <li class="face" @click="hintPop(item)">{{item.emoji}}</li>
                                </Tooltip>
                            </template>
                        </ul>
                    </i-col>
                </row>
            </div>
        </section>
    </div>
</template>
 
<script>
import emoji from 'node-emoji';
import emojiData from '../assets/data/emoji.json';
import _ from 'underscore';

var cacheList = [];
export default {
    name: '',
    props: {},
    components: {},
    data() {
        return {
            word : '',
            list : [],
            openAnimate : true,
            animateIndex : -1,
            hintList : [],
            popList : [
                {
                    content:'这都不会，你是小笨蛋吗',
                    okText : '是的',
                    cancelText : '你才是'
                },
                {
                    content:'叫爸爸，我就告诉你',
                    okText : '爸爸',
                    cancelText : '滚'
                },
                {
                    content:'听说你又不会了',
                    okText : '是的',
                    cancelText : '你听错了'
                },
                {
                    content:'魔镜魔镜，谁是天底下最聪明的人',
                    okText : 'Jsonkk',
                    cancelText : '大端端'
                },
                {
                    content:'提醒一次，就要请吃饭的哦',
                    okText : '请就请，咱不差钱',
                    cancelText : '我拒绝'
                }
            ]
        }
    },
    mounted() {
        this.initHintList();
        // console.log(emojiData);
    },
    computed: {},
    methods: {
        // 提交
        submit(){
            let {word,list,openAnimate} = this;
            let underLineWord = word.trim().replace(/\s/g, '_');
            let middleLineWord = word.trim().replace(/\s/g, '-');
            if(emoji.hasEmoji(underLineWord)){
                word = underLineWord;
            }
            else if(emoji.hasEmoji(middleLineWord)){
                word = middleLineWord;
            }

            if(emoji.hasEmoji(word)){
                let face = emoji.get(`:${word}:`);
                let obj = {face,word,animated:true};
                this.delCacheData(obj);
                
                if(_.isEmpty(list)){
                    obj.animated = true;
                    list.push([obj]);
                }
                else{
                    let bottomIndex = list.length-1;
                    let isNewRow = list[bottomIndex].length >= 5;
                    if(isNewRow){
                        list.push([obj]);
                    }
                    else{
                        list[bottomIndex].push(obj);
                    }
                    this.$nextTick(()=>{
                        let self = this;
                        function changeAnimate(){
                            let $list = self.$refs.list;
                            $list.scrollTop = $list.scrollHeight;
                            self.animateIndex = list.length-1 -1;
                            // list[bottomIndex][list[bottomIndex].length-1].animated = true;
                        }
                        changeAnimate();
                        // if(isNewRow){
                        //     setTimeout(()=>{
                                
                        //     },0);
                        // }
                        
                    });
                }
                this.word = '';
            }
            else{
                this.$Message.error({
                    content : 'canot find,try again!'
                })
            }
        },
        updated(){
            
        },
        // 删除展示数据
        delCacheData(item={}){
            let index = _.findIndex(cacheList,{key:item.word});
            if(index>-1){
                let list = cacheList.splice(index,1);
                this.hintList = cacheList.slice(0,100);
            }

        },
        // 初始化提示列表
        initHintList(){
            let list = [];
            let max = 2000;
            function addItem(item){
                let num = _.random(0, max);
                if(list[num]){
                    addItem(item,_.random(0, max))
                }
                else{
                    list[num] = item;
                }
            }
            for(let key in emojiData){
                addItem({emoji:emojiData[key],key});
            }
            list = _.compact(list);
            cacheList = list;
            this.hintList = list.slice(0,100);
        },
        // 提示框
        hintPop(item){
            let {popList} = this;
            let self = this;
            let index = _.random(0, popList.length-1);
            let config = popList[index];
            Object.assign(config,{onOk(){
                self.word = item.key;
                self.$refs.search.focus();
            }})
            this.$Modal.confirm(config);
        }
    },
    watch: {},
    filters: {}
}
</script>
 
<style lang="less" scoped>
@import "../assets/style/guess-list.less";
</style>
 