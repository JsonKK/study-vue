<template>
    <div class="layout">
        <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
            <Menu :active-name="$route.name" theme="dark" width="auto" @on-select="selectMenu" accordion>
                <MenuItem :name="item.name" v-for="(item,index) in menus" :key="index">{{item.mate && item.mate.title}}</MenuItem>
                <!-- <Submenu name="1">
                    <template slot="title">
                        <Icon type="ios-navigate"></Icon>
                        Item 1
                    </template>
                    <MenuItem name="1-1">Option 1</MenuItem>
                    <MenuItem name="1-2">Option 2</MenuItem>
                    <MenuItem name="1-3">Option 3</MenuItem>
                </Submenu> -->
                
            </Menu>
        </Sider>
        <Layout :style="{marginLeft: '200px'}">
            <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
            <Content :style="{padding: '0 16px 16px','text-align':'left'}">
                <Breadcrumb :style="{margin: '16px 0'}">
                    <BreadcrumbItem v-for="(item,index) in breads" :key="index">{{item}}</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <!-- <div style="height: 600px">Content</div> -->
                    <router-view />
                </Card>
            </Content>
        </Layout>
    </div>
</template>
<script>
    import routers from '@/router/routers';
    export default {
        props: {},
        components: {},
        data(){
            return {
                menus : [],
                breads : []
            }
        },
        mounted(){
            console.log(this.$route)
            console.log(routers)
            this.initMenu();
        },
        methods : {
            //初始化菜单栏
            initMenu(){
                let arr = [];
                routers.forEach((o,i)=>{
                    if(Array.isArray(o.children)){
                        arr = [...arr,...o.children];
                    }
                });
                this.menus = arr;
            },
            //选择菜单
            selectMenu(name){
                if(this.$route.name === name){
                    return;
                }
                this.$router.push({name});
            }
        },
        watch : {
            $route : {
                handler(value){
                    let arr = value.path.split('/').filter((o,i)=>{
                        return o && o.trim();
                    });
                    this.breads = arr;
                },
                immediate : true
            }
        }
    }
</script>
<style lang="less" scoped>

.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}

</style>