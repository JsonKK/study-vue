<template>
  <div >
    <Row class-name="row" :gutter="16">
      <i-col span="3">
        <i-select v-model="status">
            <i-option v-for="item in statusList" :value="item.value" :key="item.value">
              {{ item.label }}
            </i-option>
        </i-select>
      </i-col>
      <i-col span="4">
        <i-input v-model="name" placeholder="输入事项名称" />
      </i-col>
      <i-col span="2" class="line-right">
        <i-button type="primary" @click="search">搜索</i-button>
      </i-col>
      <i-col span="2">
        <i-button @click="showEdit">新增</i-button>
      </i-col>
    </Row>
  </div>
</template>
 
<script>
  import {Row,Col,Input,Select,Button,Option} from 'view-design';
  export default {
    name: 'mFilter',
    props:{},
    components: {
      Row,
      'i-option':Option,
      'i-col' : Col,
      'i-input' : Input,
      'i-select' : Select,
      'i-button' : Button
    },
    data(){
      return{
        name : '',
        statusList: [
          {
            value: 'all',
            label: '全部'
          },
          {
            value: 1,
            label: '未完成'
          },
          {
            value: 2,
            label: '已完成'
          },
          {
            value: 0,
            label: '已删除'
          }
        ],
        status: 'all'
      }
    },
    mounted(){},
    computed:{},
    methods:{
      // 显示新增
      showEdit(){
        this.$parent.showEdit({status:1},false);
      },
      //检索
      search(){
        let {name,status} = this;
        let newStatus = ( status == 'all' ) ? '' : status; 
        this.$parent.search({name,status : newStatus});
      }
    },
    watch:{}
  }
</script>
 
<style lang="less">
@import '../../assets/style/vars.less';
.row{
  margin: 0 0 @m-space 0;
}
</style>
 