import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    count : 10
};

const mutations = {
    add(state,obj={}){
        let {n} = obj;
        if(n>0){
            state.count += n;
            return;
        }
        state.count++;
    }
};

const getters = {
    count(state){
        return state.count += 100;
    }
}

const actions = {
    addPlus({commit}){
        setTimeout(()=>{
            commit({
                type : 'add',
                n : 3
            })
        },1000);
    }
}

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})

export default store;