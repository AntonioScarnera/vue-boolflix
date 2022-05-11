<template>
    <section>
        <input type="text" placeholder="Search" v-model="search" @keyup.enter="cerca">

        <button @click="cerca">Cerca</button>
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
            this.search = '';
        }
    }
}
</script>

<style lang="scss">

</style>