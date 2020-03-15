<template>
    <div id="main">
        <p>
            <span><router-link to="/dom">dom</router-link></span>
            <span><router-link to="/formText">formText</router-link></span>
            <span><router-link :to="{ path: '/event', query: { plan: 'private' },params: { userId: 123 }}" >About</router-link></span>
        </p>
    </div>
</template>
 
<script>
    export default {
        name: '',
        props:{},
        components: {},
        data(){
            return {}
        },
        mounted(){},
        computed:{},
        methods:{},
        watch:{},
        filters:{}
    }
</script>
 
<style></style>
 