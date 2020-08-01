<template>
  <div>
    <Modal
      v-model="show"
      :title="title"
      :closable="false"
      :mask-closable="false"
      :width="600"
      @on-ok="ok('userConfirm')"
      @on-cancel="cancel">
        <Form ref="formTask" :model="formData" :rules="formRule" :label-width="100">
          <FormItem label="任务名称" prop="name">
            <i-input v-model="formData.name" placeholder="请输入任务名称" ></i-input>
          </FormItem>
          <FormItem label="结束日期" prop="endtime">
            <DatePicker type="date" :options="optionsTime" :value="formData.endtime" @on-change="changeTime($event,'endtime')" placeholder="请选择任务结束日期" style="width: 200px"></DatePicker>
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
    //完成状态，1未完成、2完成
    status : 1,
    //任务内容
    content : '',
    //计划结束时间
    endtime : ''
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
        show : false,
        module : 'todoNode',
        formData : Object.assign({},initFormData),
        isEdit : false,
        formRule : {
          name: [
            { required: true, message: '请输入任务名称', trigger: 'blur' }
          ],
          endtime:[
            { required:true, message:'请选择任务结束时间', trigger:'blur'}
          ],
          content : [
            {required : true, message: '请输入任务内容',trigger:'blur'}
          ]
        },
        optionsTime: {
          disabledDate (date) {
            return date && date.valueOf() < Date.now() - 86400000;
          }
        }
      }
    },
    mounted(){
      
    },
    computed:{
      title(){
        let {isEdit} = this;
        return (isEdit) ? '编辑任务' : '新增任务';
      }
    },
    methods:{
      // 提交表单
      ok(){
        let {module} = this;
        this.$refs.formTask.validate().then((validate)=>{
          // 验证没通过
          if(!validate){
            return
          }
          let {formData} = this;
          let url = 'createTask';
          if(formData.id){
            url = 'editTask';
          }
          this.$api(url,module,formData).then((res)=>{
            if(res.status == 'success'){
              this.$parent.search();
            }
            this.cancel();
            this.$Notice.success({
              title : res.message
            })
          })
          console.log(formData);
        }).catch((err)=>{
          this.$Notice.error({
            title : err
          })
        });
      },
      // 取消
      cancel(){
        this.show = false;
        this.$refs.formTask.resetFields();
        this.formData = Object.assign({},initFormData);
      },
      changeTime(date,dateType){
        this.formData[dateType] = date;
      },
      // 显示弹窗
      showEdit(data={},edit){
        let {status} = data;
        if(!status){
          return;
        }
        this.isEdit = Boolean(edit);
        // 如果是编辑
        if(edit){
          this.formData = data;
        }
        this.show = true;
      }
    }
  }
</script>
 
<style lang="less">

</style>
 