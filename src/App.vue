<template>
  <div id="app">
    <header>
      <h1 class="display-6">Boolflix</h1>
      <search-bar @performSearch="search"/>
    </header>
    <main>
      <grid-list :items="movies" :loader="loading"/>
    </main>
  </div>
</template>

<script>
import GridList from './components/GridList.vue'
import SearchBar from './components/SearchBar.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    SearchBar,
    GridList
  },
  data(){
    return{
      apiKey: '4c813c61fbf2d72e7a32cdfde861e711',
      apiPath: 'https://api.themoviedb.org/3/search/',
      movies: [],
      loading: false
    }
  },
  computed:{

  },
  methods:{
    getMovies(parameters){
      axios.get(this.apiPath + 'movie', parameters).then((res)=>{
        console.log(res.data.results)
        this.movies = res.data.results;
        console.log(this.movies)
        this.loading = false
      }).catch((err)=>{
        console.log('Error', err);
      })
    },
    search(text){
      const paramsObj = {
        params:{
          api_key: this.apiKey,
          query: text, 
          language: 'it-IT'
        }
      }
      this.loading = true;
      this.getMovies(paramsObj)
    }
  }

}
</script>

<style lang="scss">

@import './styles/general.scss';

</style>
