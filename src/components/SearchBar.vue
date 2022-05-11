<template>
    <section>
        <input type="text" placeholder="Search Movie or Series" v-model="search" @keyup.enter="cerca" size="20px" >
    </section>
</template>

<script>
//import state from '../store.js'
export default {
    name: 'SearchBar',
    data(){
        return{
            search: ''
        }
    },
    computed:{
        /*
        mysearch(){
            return state.search
        }
        */
    },
    methods:{
        cerca(){
            this.$emit('performSearch', this.search)
        }
    }
}
</script>

<style lang="scss">
    
</style>