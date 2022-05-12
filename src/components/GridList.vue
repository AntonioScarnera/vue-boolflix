<template>
  <section>
      <loader-comp v-if="loader"/>
      <div v-if="titleStatus" class="text-center mt-4 mb-2">
        <span class="fw-bold mytitle">{{title}}</span>
      </div>
      <div class="d-flex flex-wrap justify-content-center gap-4">
        <div v-for="item in items" :key="item.id">
              <card-comp :element="item"/>
        </div>
      </div>
  </section>
</template>

<script>
//import state from '../store.js'

import CardComp from './CardComp.vue'
import LoaderComp from './LoaderComp.vue'
export default {
    name: 'GridList',
    components:{
    CardComp,
    LoaderComp
      
    },
    props:['items','loader','title','titleStatus'],
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
@import '../styles/vars.scss';

    .mytitle{
        border-bottom: 2px solid rgb(32, 32, 32);
        color: $red;
        font-size: 40px;
        margin: 15px;
        text-shadow: 2px 3px 4px black;
    }


</style>