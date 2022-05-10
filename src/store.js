import Vue from 'vue'

const store = {
    state: Vue.observable({
        search: 'star'
    }),
    setSearch(val){
        this.state.search = val;
    }
}


export default store;