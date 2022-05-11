<template>
  <section>
      <h2>{{title}}</h2>
      <div v-for="item in items" :key="item.id">
          <card-comp :element="item"/>
      </div>
  </section>
</template>

<script>
//import state from '../store.js'

import CardComp from './CardComp.vue'
export default {
    name: 'GridList',
    components:{
      CardComp
      
    },
    props:['items','loader','title'],
    data(){
        return{

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
        
    }
}
</script>

<style lang="scss">

</style>