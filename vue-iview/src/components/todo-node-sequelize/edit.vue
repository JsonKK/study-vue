<template>
  <div>
    <Modal
      v-model="show"
      title="增加任务列表"
      :closable="false"
      :mask-closable="false"
      @on-ok="ok('userConfirm')"
      @on-cancel="cancel">
        <Form ref="formTask" :model="formData" :rules="formRule" :label-width="80">
          <FormItem label="任务名称" prop="name">
            <i-input v-model="formData.name" placeholder="请输入任务名称" ></i-input>
          </FormItem>
          <FormItem label="开始日期" prop="beginTime">
            <DatePicker type="date" :options="options3" @on-change="changeTime($event,'beginTime')" placeholder="请选择任务开始日期" style="width: 200px"></DatePicker>
          </FormItem>
          <FormItem label="结束日期" prop="endTime">
            <DatePicker type="date" :options="options3" @on-change="changeTime($event,'endTime')" placeholder="请选择任务结束日期" style="width: 200px"></DatePicker>
          </FormItem>
          <FormItem label="任务内容" prop="content" >
            <i-input v-model="formData.content" :autosize="{minRows : 3,maxRows: 3}" placeholder="请输入任务内容" type="textarea" :rows="3" ></i-input>
          </FormItem>
        </Form>
        <div slot="footer">
          <Button type="text"  @click="cancel">取消</Button>
          <Button type="primary"  @click="ok">确定</Button>
        </div>
    </Modal>
  </div>
</template>
 
<script>
  // 引用表单相关组件
  import {Model,Form,FormItem,Input,DatePicker} from 'view-design';
  // 初始化表单数据
  const initFormData = {
    // 任务名称
    name : '',
    //编辑状态，1为新增、2为修改
    status : 1,
    //任务内容
    content : '',
    //计划开始时间
    beginTime : '',
    //计划结束时间
    endTime : ''
  }
  export default {
    name: 'edit',
    props:{},
    components: {
      Model,Form,FormItem,
      'i-input':Input
    },
    data(){
      return{
        show : true,
        formData : Object.assign({},initFormData),
        formRule : {
          name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' }
          ],
          beginTime:[
            { required:true, message:'请选择任务开始时间', trigger:'blur'}
          ],
          endTime:[
            { required:true, message:'请选择任务结束时间', trigger:'blur'}
          ],
          content : [
            {required : true, message: '请输入任务内容',trigger:'blur'}
          ]
        },
        options3: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
          }
        }
      }
    },
    mounted(){
    },
    computed:{},
    methods:{
      // 提交表单
      ok(){
        this.$refs.formTask.validate().then((validate)=>{
          console.log(validate)
        }).catch((err)=>{
          console.log(err)
        })
        return false;
        // this.cancel();
      },
      // 取消
      cancel(){
        this.show = false;
      },
      changeTime(date,dateType){
        this.formData[dateType] = date;
      },
      // 显示新增弹窗
    }
  }
</script>
 
<style lang="less">

</style>
 