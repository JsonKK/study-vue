<script>
import {h} from 'vue';
export default {
  render(){
    const that = this;
    return h(
      'h' + this.level,
      {
        'onUpdate:value' : value => this.$emit('update:value',value)
      },
      [
        h('p',{
          class : {
            'vmodel-text' : true
          }
        },this.value),
        this.$slots.default(),
        h('br'),
        h('input',{
          value : this.value,
          onInput(event){
            const text = event.target.value;
            //提交事件，需要在emits中申明
            that.$emit('update:value',text)
          }
        }) 
      ] 
      
    )
  },
  emits:['value','update:value'],
  props: {
    level: {
      type: Number,
      required: true
    },
    value : {
      type : String
    }
  }
}
</script>