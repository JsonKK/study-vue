<template>
  <div class="left-main">
    <Row class="pd text-center">
      <i-col span="10" offset="1">
        <Card class="item-add-component" draggable="true">
          <p slot="title">文本</p>
          <icon type="ios-list-box-outline" size="40" />
        </Card>
      </i-col>
      <i-col span="10" offset="2">
        <Card class="item-add-component" draggable="true">
          <p slot="title">标题</p>
          <icon type="ios-information-circle" size="40" />
        </Card>
      </i-col>
    </Row>
  </div>
</template>

<script>
  import h5Factory from '@/assets/data/f5-factory';
  console.log(h5Factory)
  export default {
    name: 'h5-factory-left',
    data() {
      return {
        
      }
    }
  }
</script>

<style lang="less" scoped>
  .pd{
    padding: 12px 0;
  }
  .text-center{
    text-align: center;
  }
  .item-add-component{
    cursor: pointer;
  }
</style>