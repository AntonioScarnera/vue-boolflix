<template>
  <div id="app">
    <header>
      <div class="mycontainer d-flex align-items-center justify-content-between h-100"> 
        <h1 class="display-6">Boolflix</h1>
        <search-bar @performSearch="search"/>
      </div>
    </header>

    <main>
      <grid-list :items="movies" title="Movie" :loader="loadingMovie" :titleStatus="titleStatus" class="mycontainer"/>
      <grid-list :items="series" title="Series" :loader="loadingSeries" :titleStatus="titleStatus" class="mycontainer"/>
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
      series:[],
      loadingMovie: false,
      loadingSeries: false,
      titleStatus: false
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
        this.loadingMovie = false
        this.titleStatus = true
      }).catch((err)=>{
        console.log('Error', err);
      })
    },
    getSeries(parameters){
      axios.get(this.apiPath + 'tv', parameters).then((res)=>{
        console.log(res.data.results)
        this.series = res.data.results;
        console.log(this.series)
        this.loadingSeries = false
        this.titleStatus = true
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
      this.loadingMovie = true;
      this.loadingSeries = true;
      this.getMovies(paramsObj);
      this.getSeries(paramsObj);
    }
  }

}
</script>

<style lang="scss">

@import './styles/general.scss';

header{
  height: 100px;
  background-color: $black;
  div{
    h1{
      color: $red;
      margin-bottom: 0;
    }
  }
}


</style>

<style>

*::-webkit-scrollbar,
*::-webkit-scrollbar-thumb {
  width: 26px;
  border-radius: 13px;
  background-clip: padding-box;
  border: 10px solid transparent;
}

*::-webkit-scrollbar-thumb {        
  box-shadow: inset 0 0 0 10px;
}


</style>