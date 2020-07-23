<template>
  <div id="todo-node-sequelize">
    <m-filter></m-filter>
    <m-table></m-table>
    <edit></edit>
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
        module : 'todoNode'
      }
    },
    mounted(){
      // this.getList();
    },
    computed:{},
    methods:{
      // 获取列表
      getList(){
        let {module} = this;
        this.$api('getPersonList',module);
      }
    }
  }
</script>
 
<style lang="less"></style>
 