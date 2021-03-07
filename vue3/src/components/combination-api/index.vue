<template>
  <hr/>
  <mSetup :text="setup" @emit="emitSetup" />
  <hr/>
  <mReactive />
  <hr/>
  <mRef />
  <hr/>
  <mComputed />
  <hr/>
  <mWatchEffect />
  <hr/>
  <mWatch />
  <hr/>
  <mReadonly />
  <hr/>
  <mToRef />
</template>
<script>
import mSetup from 'comps/combination-api/setup.vue';
import mReactive from 'comps/combination-api/reactive.vue';
import mRef from 'comps/combination-api/ref.vue';
import mComputed from 'comps/combination-api/computed.vue';
import mWatchEffect from 'comps/combination-api/watchEffect.vue';
import mWatch from 'comps/combination-api/watch.vue';
import mReadonly from 'comps/combination-api/readonly.vue';
import mToRef from 'comps/combination-api/to-ref.vue';


export default {
  components : {mSetup,mReactive,mRef,mComputed,mWatchEffect,mWatch,mReadonly,mToRef},
  data(){
    return {
      setup : '来自父组件的默认值'
    }
  },
  methods : {
    emitSetup({msg}){
      console.log(msg);
    }
  }
}
</script>