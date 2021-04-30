
<script>
  let that;
  import child from './child.vue';
  export default {
    props:{
      level : {
        type : Number
      }
    },
    methods : {
      getTime(){
        console.log(new Date());
      },
    },
    render: function (createElement) {
      //第一个参数类型
      //字符串： 代表标签名称
      //第二个参数可以是子组件也可以数属性
      //第二个参数是子节点
      //第二个参数类型
      //字符串： 以文本形式渲染
      //数组: 包含多个子节点
      return createElement(
        'h' + this.level,   // 标签名称
        {
          style : {
            color : '#212121'
          }
        },
        // 子节点数组
        [
          createElement('p',this.$slots.name),
          createElement('p',this.$slots.default),
          createElement('span','副标题'),
          createElement('div',{
            'class': {
              foo: true,
              bar: false
            },
            // 与 `v-bind:style` 的 API 相同，
            // 接受一个字符串、对象，或对象组成的数组
            style: {
              color: 'red',
              fontSize: '14px'
            },
            // 普通的 HTML attribute
            attrs: {
              id: 'foo'
            },
            // 组件 prop
            props: {
              myProp: 'bar'
            },
            // DOM property
            domProps: {
              innerHTML: '<em>div</em>'
            },
            on:{
              click(e){
                that.getTime();
              }
            }
          }),
          createElement(child,{
            //用于传递给组件的Props数据
            props : {
              name : '是不是名字'
            },
            on : {
              //接收来自子组件的参数
              'self-click' : function(str){
                console.log('子组件传来的信息' + str)
              }
            }
          },[
            createElement('div','我是孙子节点')
          ]),
          //渲染列表
          createElement('ul',this.list.map((item)=>{
            return createElement('li',item.title)
          })),
          //实现数据双向绑定
          createElement('input', {
            domProps: {
              value: that.value
            },
            on: {
              input: function (event) {
                that.value = event.target.value;
                that.$emit('input', event.target.value)
              }
            }
          })
        ] 
      )
    },
    data(){
      that = this;
      return{
        list : [
          {
            title : '列表第一项'
          },
          {
            title : '列表第二项'
          }
        ],
        value : 3
      }
    },
    watch : {
      value(val){
        console.log(val)
      }
    }
  }
</script>
 
<style></style>
 