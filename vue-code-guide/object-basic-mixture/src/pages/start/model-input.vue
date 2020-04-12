<template>
    <div>
        <m-input v-model="value"></m-input>
        <span>{{value}}</span>
    </div>
</template>

<script>
    import mInput from '../../components/input';
    export default {
        name: '',
        components:{
            mInput
        },
        data() {
            return {
                value : ''
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>