<template>
    <div>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" v-model="inputText">

            <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="submit">Invio</button>
        </div>
    </div>
</template>

<script>
import store from '../store.js'
export default {
    name: 'SearchBarComp',
    data(){
        return{
            inputText: '',
        }
    },
    computed:{

    },
    methods:{
        submit(){
            store.setSearch(this.inputText)
            console.log(this.inputText)
        },
    }
}
</script>

<style>

</style>