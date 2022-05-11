<template>
  <section>
      <ul>
        <li v-for="item in items" :key="item.id">
          Film ID: {{item.id}} <br> 
          Original Title: {{item.original_title}} <br> 
          Title: {{item.title}} <br> 
          Language: {{item.original_language}} <br> 
          Vote: {{item.vote_average}}
        </li>
      </ul>
  </section>
</template>

<script>
//import state from '../store.js'
export default {
    name: 'GridList',
    props:['items','loader'],
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