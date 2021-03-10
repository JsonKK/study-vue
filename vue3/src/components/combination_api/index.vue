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
  <mWatch :="$attrs"/>
  <hr/>
  <mReadonly />
  <hr/>
  <mToRef />
  <hr/>
  <mVfor />
</template>
<script>
import mSetup from 'comps/combination_api/setup.vue';
import mReactive from 'comps/combination_api/reactive.vue';
import mRef from 'comps/combination_api/ref.vue';
import mComputed from 'comps/combination_api/computed.vue';
import mWatchEffect from 'comps/combination_api/watchEffect.vue';
import mWatch from 'comps/combination_api/watch.vue';
import mReadonly from 'comps/combination_api/readonly.vue';
import mToRef from 'comps/combination_api/to_ref.vue';
import mVfor from 'comps/combination_api/vfor.vue';

export default {
  components : {mSetup,mReactive,mRef,mComputed,mWatchEffect,mWatch,mReadonly,mToRef,mVfor},
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