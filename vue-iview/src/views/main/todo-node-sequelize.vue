<template>
  <div id="todo-node-sequelize">
    <m-filter></m-filter>
    <m-table ref="table"></m-table>
    <edit ref="edit"></edit>
  </div>
</template>
 
<script>
  // 导入表格组件
  import mTable from '../../components/todo-node-sequelize/table.vue';
  // 导入检索过滤区域组件
  import mFilter from '../../components/todo-node-sequelize/filter.vue';
  //引入编辑框
  import edit from '../../components/todo-node-sequelize/edit.vue';
  export default {
    name: 'todo-node-sequelize',
    props:{},
    components: {
      mTable,
      mFilter,
      edit
    },
    data(){
      return{
        module : 'todoNode',
        pageInfo : {
          pageNum : 1,
          pageSize : 3,
          status : ''
        }
      }
    },
    mounted(){
    },
    computed:{},
    methods:{
      //编辑或新增任务
      showEdit(data,isEdit){
        this.$refs.edit.showEdit(data,isEdit);
      },
      //检索列表
      search(data){
        this.$refs.table.search(data);
      }
    }
  }
</script>
 
<style lang="less"></style>
 