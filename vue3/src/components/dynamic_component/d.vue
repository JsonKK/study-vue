<script>
import {h} from 'vue';

const DynamicHeading = (props,context) => {
  // 会报出警告
  // console.log(context.slots);
  //第三个参数是渲染内容或者子元素
  //第二个参数是配置信息
  return h(`h${props.level}`,context.attrs,[props.msg]);
}

DynamicHeading.props = ['level','msg'];

export default DynamicHeading;
</script>