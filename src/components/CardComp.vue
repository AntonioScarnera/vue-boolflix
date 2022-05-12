<template>
  <div class="mycard">
      <div class="description-list">
        <span>
          Title: {{element.title ? element.title : element.name}} 
        </span> 
        Original Title: {{element.original_title ? element.original_title : element.original_name}} <br> 
        <div>
          <span v-for="(n, index) in 5" :key="index" class="stars">
            <i :class="n <= voteViewer ? 'fa-solid fa-star gold' : 'fa-regular fa-star'"></i>
          </span>
        </div>


        Language: <country-flag :country='language' size='small'/> <br>  

        Overview: {{element.overview ? element.overview : 'Not Exist'}} <br>


      </div>

      <div class="film-image">
          <img :src="imagePath + element.poster_path ? imagePath + element.poster_path : 'Poster non trovato'">
      </div> 
  </div>
</template>

<script>
import CountryFlag from 'vue-country-flag'
export default {
    name: 'CardComp',
    props:['element'],
    components:{
      CountryFlag,
      
    },
    computed:{
      language(){
        if(this.element.original_language === "en"){
          return  'gb';
        }else if(this.element.original_language === "ja"){
          return  'jp';
        }else{
          return this.element.original_language;
        }
      },
      voteViewer(){
        return Math.ceil(this.element.vote_average / 2)
      }
    },
    data(){
      return{
        imagePath: 'https://image.tmdb.org/t/p/w342',
      }
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/vars.scss';
  .gold{
    color: gold;
  }
  span{
    display: block;
  }
  .stars{
    display: inline-block;
    margin-right: 3px;
  }
  .mycard{

    height: 600px;
    width: 342px;
    background-color: black;
    font-size: 15px;
    
    overflow-y: auto;
    color: $white;
    .description-list{
      display: none;
      padding: 20px;
    }
    .film-image{
      height: 100%;
      width: 100%;
      overflow: hidden;
      
      img{
        height: 100%;
        width: 100%;
      }
    }
    
    &:hover{
      .description-list{
        display: block;
      }
      .film-image{
        display: none;
      }
    }
    
  }
</style>