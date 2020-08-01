<template>
  <div class="table-content"> 
    <!-- 加载中 -->
    <Spin fix v-if="loading">
      <Icon type="ios-loading" size=18 class="icon-load"></Icon>
      <div>Loading</div>
    </Spin>
    <Table border :columns="columns" :data="list" >
      
      <!-- 内容 -->
      <template slot-scope="{ row }" slot="content">
        <p class="row-content">{{row.content}}</p>
      </template>
      <!-- 完成情况 -->
      <template slot-scope="{ row }" slot="status">
        <template v-if="row.status == 0">
          <strong>已删除</strong>
        </template>
        <template v-if="row.status == 1">
          <strong>未完成</strong>
        </template>
        <template v-if="row.status == 2">
          <strong>已完成</strong>
        </template>
      </template>
      <!-- 操作 -->
      <template slot-scope="{ row }" slot="action">
        <!-- 如果是未完成 -->
        <template v-if="row.status == 1">
          <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row)">编辑</Button>
          <Button type="default" size="small" style="margin-right: 5px" @click="changeStatus(row,2)">完成</Button>
        </template>
        <!-- 如果任务完成 -->
        <template v-if="row.status == 2">
          <Button type="default" size="small" style="margin-right: 5px" @click="changeStatus(row,1)">未完成</Button>
        </template>
        <!-- 已经删除就不显示删除按钮 -->
        <template v-if="row.status != 0">
          <Button type="error" size="small" @click="remove(row)">删除</Button>
        </template>
      </template>
    </Table>
    <Page @on-change="changePage" class-name="paging" :total="total" :current="pageInfo.pageNum" :page-size="pageInfo.pageSize"/>
  </div>
</template>
 
<script>
  import {Button,Table,Page,Spin,Icon} from 'view-design';
  export default {
    name: 'tabel',
    props:{},
    components: {Table,Button,Spin,Page,Icon},
    data(){
      return{
        loading:false,
        pageInfo : {
          pageSize:10,
          pageNum:1,
          name : ''
        },
        module : 'todoNode',
        total : 0,
        columns: [
          {
            title: '事项名称',
            key: 'name',
            width : 200
          },
          {
            title: '截止时间',
            key: 'endtime',
            width : 200
          },
          {
            title: '内容',
            key: 'content',
            slot : 'content'
          },
          {
            title: '完成情况',
            key: 'status',
            slot : 'status',
            width : 150
          },
          {
            title: '操作',
            slot: 'action',
            width: 200,
            align: 'center'
          }
        ],
        list: []
      }
    },
    mounted(){
      this.getList();
    },
    computed:{},
    methods:{
      // 编辑
      edit(data){
        this.$parent.showEdit(data,true);
      },
      // 删除任务
      remove(item){
        let {module} = this;
        let {id,name} = item;
        let self = this;
        if(!id){
          this.$Notice.error({
            title : '删除失败，缺少唯一标识'
          })
        }
        let config = {
          content : `确认删除任务:${name}?`,
          onOk(){
            self.$api('deleteTask',module,{},{
              otherParams:{
                id
              }
            }).then((res)=>{
              if(res.status == 'success'){
                self.search();
              }
              self.$Notice.success({
                title : res.message
              })
            })
          }
        }
        this.$Modal.confirm(config);
        
      },
      // 获取列表
      getList(){
        let {module,pageInfo} = this;
        this.loading = true;
        this.$api('postTaskList',module,pageInfo).then((res)=>{
          let {total,list} = res;
          this.loading = false;
          this.total = total || 0;
          this.list = list || [];
        }).catch(()=>{
          this.loading = false;
        });
      },
      //切换页签
      changePage(page){
        this.pageInfo.pageNum = page;
        this.getList();
      },
      //检索列表
      search(data={}){
        this.pageInfo = Object.assign({},this.pageInfo,data,{pageNum:1});
        this.getList();
      },
      //修改状态
      changeStatus(item,status){
        let {module,pageInfo} = this;
        let {id} = item;
        this.$api('putTaskEdit',module,{},{
          otherParams : {
            id,
            status
          }
        }).then((res)=>{
          if(res.status == 'success'){
            this.search();
          }
          this.$Notice.success({
            title : res.message
          })
        })
      }
    },
    watch:{}
  }
</script>
 
<style lang="less">
@import '../../assets/style/vars.less';
.paging{
  margin-top: @m-space;
  text-align: right;
}
.row-content{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.table-content{
  position: relative;
}
.icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg);}
  50%  { transform: rotate(180deg);}
  to   { transform: rotate(360deg);}
}
</style>
 