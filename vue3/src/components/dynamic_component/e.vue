

<script type="text/html" id="my-comp-template">
  <div>{{ hello }}</div>
</script>

<script>
export default {
  template: '#my-comp-template',
  data(){
    return {
      hello : '模板组件'
    }
  }
}
</script>


