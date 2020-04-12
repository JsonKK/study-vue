<template>
    <div>
        <input type="text" name="text" id="" :value="value" @keyup="input($event)" />
    </div>
</template>

<script>
    export default {
        model: {
            prop: 'value',
            event: 'input'
        },
        name: '',
        props : ['value'],
        data() {
            return {
                outValue : ''
            }
        },
        methods:{
            input(event){
                this.$emit('input',event.currentTarget.value);
            }
        }
    }
</script>

<style lang="less" scoped>
    
</style>