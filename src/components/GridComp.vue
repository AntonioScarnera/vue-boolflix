<template>
  <div>
      <search-bar-comp />
      <div>
          <ul>
              <li v-for="film in filmList" :key="film.id">
                  TITOLO: {{film.title}} /-/ TITOLO ORIGINALE: {{film.original_title}} /-/ VOTO: {{film.vote_average}} /-/ LINGUA: {{film.original_language}} /-/ LOCANDINA: <br> <img :src="'https://image.tmdb.org/t/p/w200'+film.poster_path" alt="">
              </li>
          </ul>
      </div>
  </div>
</template>

<script>

import store from '../store.js'
import axios from 'axios'
import SearchBarComp from './SearchBarComp.vue'

export default {
    name: 'GridComp',
    components: { 
    SearchBarComp

    },
    data(){
        return{
            filmList: [],
            apiURL: 'https://api.themoviedb.org/3/search/',
            apiKey: '4c813c61fbf2d72e7a32cdfde861e711'
            
        }
    },
    computed:{
        searchText(){
            return store.state.search
        },
        filteredFilmList(){
            
            if(this.searchText === '') return this.filmList;

            return this.filmList.filter((element)=>element.original_title === this.searchText)
        }
    },
    methods:{
        search(){
            store.state.search
        }
    },
    created(){
        const paramsObj = {
            params:{
                api_key: this.apiKey,
                query: this.searchText,
                language: 'it-IT'
            }
        }
        axios.get(this.apiURL + 'movie', paramsObj).then((res) => {
            this.filmList = res.data.results
            console.log(this.filmList)
        }).catch((err) => {
            console.log("Error", err);
        });
        
    }
}
</script>

<style>

</style>