<template>
  <div >
    <Row class-name="row" :gutter="16">
      <i-col span="3">
        <i-select v-model="model1">
            <i-option v-for="item in cityList" :value="item.value" :key="item.value">
              {{ item.label }}
            </i-option>
        </i-select>
      </i-col>
      <i-col span="4">
        <i-input v-model="value2" placeholder="default size" />
      </i-col>
      <i-col span="2" >
        <i-button type="primary">搜索</i-button>
      </i-col>
      <i-col span="2" pull="1">
        <i-button >新增</i-button>
      </i-col>
    </Row>
  </div>
</template>
 
<script>
  import {Row,Col,Input,Select,Button,Option} from 'view-design';
  export default {
    name: 'mFilter',
    props:{},
    components: {
      Row,
      'i-option':Option,
      'i-col' : Col,
      'i-input' : Input,
      'i-select' : Select,
      'i-button' : Button
    },
    data(){
      return{
        value2: '',
         cityList: [
            {
                value: 'New York',
                label: 'New York'
            },
            {
                value: 'London',
                label: 'London'
            },
            {
                value: 'Sydney',
                label: 'Sydney'
            },
            {
                value: 'Ottawa',
                label: 'Ottawa'
            },
            {
                value: 'Paris',
                label: 'Paris'
            },
            {
                value: 'Canberra',
                label: 'Canberra'
            }
        ],
        model1: ''
      }
    },
    mounted(){},
    computed:{},
    methods:{},
    watch:{}
  }
</script>
 
<style lang="less">
@import '../../assets/style/vars.less';
.row{
  margin: 0 0 @m-space 0;
}
</style>
 