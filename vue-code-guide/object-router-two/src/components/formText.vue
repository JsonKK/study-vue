<template>
    <div id="">
        <form @submit.prevent>
            <input type="checkbox" id="flash" value="flash" v-model="bizLines"/>
            <label for="flash">快车</label>
            <input type="checkbox" id="premium" value="premium" v-model="bizLines"/>
            <label for="flash">专车</label>
            <input type="checkbox" id="bus" value="bus" v-model="bizLines"/>
            <label for="bus">巴士</label>
        </form>
        <span>Checked lines:{{bizLines}}</span>
        <select v-model="bizLines" multiple="multiple">
            <option :selected="bizLines.indexOf('flash')>-1" value="flash">快车</option>
            <option :selected="bizLines.indexOf('premium')>-1" value="premium">专车</option>
            <option :selected="bizLines.indexOf('bus')>-1" value="bus">巴士</option>
        </select>
    </div>
</template>
 
<script>
    export default {
        name: 'formText',
        props:{},
        components: {},
        data(){
            return {
                bizLines : []
            }
        },
        mounted(){},
        computed:{},
        methods:{},
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 