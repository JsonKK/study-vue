<template>
    <div id="users">
        <h5>{{users}} page</h5>
        <h5>sex = {{users}}</h5>
        <p>id={{query.id}},name={{query.name}}</p>
    </div>
</template>
 
<script>
export default {
    name: '',
    props: {},
    components: {},
    data() { 
        return {
            
        } 
    },
    mounted() { },
    computed: {
        users : function(){
            console.log(this.$route.params)
            return this.$route.params.users;
        },
        query : function(){
            return this.$route.query;
        }
    },
    methods: {},
    watch: {},
    filters: {}
}
</script>
 
<style></style>
 