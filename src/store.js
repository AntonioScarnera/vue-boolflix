import Vue from 'vue'

const store = {
    state: Vue.observable({
        search: ''
    }),
    setSearch(val){
        this.state.search = val;
    }
}


export default store;