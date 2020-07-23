<template>
  <div>
    <Table border :columns="columns1" :data="data1">
      <template slot-scope="{ row }" slot="name">
            <strong>{{ row.name }}</strong>
        </template>
        <template slot-scope="{ row }" slot="action">
            <Button type="primary" size="small" style="margin-right: 5px" @click="edit(row)">编辑</Button>
            <Button type="error" size="small" @click="remove(row)">删除</Button>
        </template>
    </Table>
    <Page class-name="paging" :total="pageInfo.total" :current="pageInfo.num" :page-size="pageInfo.size"/>
  </div>
</template>
 
<script>
  import {Button,Table,Page} from 'view-design';
  export default {
    name: 'tabel',
    props:{},
    components: {Table,Button},
    data(){
      return{
        pageInfo : {
          size:10,
          num:1,
          total:67,
        },
        columns1: [
          {
            title: '事项名称',
            key: 'name'
          },
          {
            title: '截止时间',
            key: 'cutTime'
          },
          {
            title: '内容',
            key: 'content'
          },
          {
            title: '完成情况',
            key: 'status'
          },
          {
            title: '操作',
            slot: 'action',
            width: 150,
            align: 'center'
          }
        ],
        data1: [
          {
            name: 'John Brown',
            age: 18,
            address: 'New York No. 1 Lake Park',
            date: '2016-10-03'
          },
          {
            name: 'Jim Green',
            age: 24,
            address: 'London No. 1 Lake Park',
            date: '2016-10-01'
          },
          {
            name: 'Joe Black',
            age: 30,
            address: 'Sydney No. 1 Lake Park',
            date: '2016-10-02'
          },
          {
            name: 'Jon Snow',
            age: 26,
            address: 'Ottawa No. 2 Lake Park',
            date: '2016-10-04'
          }
        ]
      }
    },
    mounted(){},
    computed:{},
    methods:{
      // 编辑
      edit(){

      },
      // 删除
      remove(){}
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
</style>
 