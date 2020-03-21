<template>
    <div class="contain">
        <section class="list">
            <ul class="ul">
                <template v-for="(item,index) in list">
                    <li class="item " :key="index">
                        <div :class="['min-box',{'animated bounceIn':index == 0 && openAnimate == true}]">
                            <div class="emoji">{{item.face}}</div>
                            <p class="title">{{item.word}}</p>
                        </div>
                    </li>
                </template>
            </ul>
        </section>
        <section class="search">
            <div class="search-box">
                <Input search placeholder="Enter something Words..." v-model="word" @on-enter="submit" />
            </div>
            
            <!-- <div id="fakebox-container">
                <div id="fakebox">
                    <div id="fakebox-search-icon"></div>
                    <div id="fakebox-text">在 Google 上搜索，或者输入一个网址</div>
                    <input
                        id="fakebox-input"
                        autocomplete="off"
                        tabindex="-1"
                        type="text"
                        aria-hidden="true"
                    />
                    <div id="fakebox-cursor"></div>
                </div>
            </div> -->
        </section>
    </div>
</template>
 
<script>
import emoji from 'node-emoji';
export default {
    name: '',
    props: {},
    components: {},
    data() {
        return {
            word : '',
            list : [],
            openAnimate : true
        }
    },
    mounted() {
        console.log(emoji.hasEmoji('coffee'));
        console.log(emoji.hasEmoji('milk'));
    },
    computed: {},
    methods: {
        submit(){
            let {word,list,openAnimate} = this;
            if(emoji.hasEmoji(word)){
                this.openAnimate = false;
                setTimeout(()=>{
                    let face = emoji.get(`:${word}:`);
                    let newList = [{face,word},...list];
                    
                    list.unshift({face,word});
                    this.openAnimate = true;
                },0);
                
                // list = [];
                // list = newList;
                this.word = '';
            }
            else{
                this.$Message.error({
                    content : 'canot find,try again!s'
                })
            }
        }
    },
    watch: {},
    filters: {}
}
</script>
 
<style lang="less" scoped>
@import "../assets/style/guess-list.less";
</style>
 