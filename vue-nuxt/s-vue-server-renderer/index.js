const Vue = require('vue');
const render = require('vue-server-renderer').createRenderer();
const server = require('express')()

server.get('*',(req,res) => {
    render.renderToString(app,(err,html)=>{
        if(err){
            console.error(err);
            return;
        }
        res.end(`<html><body>${html}</body></html>`);
    });
});

server.listen(8888);

const app = new Vue({
    template : '<h1>Hello World!!{{name}}</h1>',
    data(){
        return {
            name : 'jsonKK'
        }
    }
});