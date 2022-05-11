<template>
  <div>
      <ul>
        <li> 
          Title: {{element.title ? element.title : element.name}} <br> 
          Original Title: {{element.original_title ? element.original_title : element.original_name}} <br> 
          Language: {{element.original_language}} <country-flag :country='element.original_language == "en" ? "gb" : element.original_language' size='small'/> <br> 
          Vote: {{Math.ceil(element.vote_average / 2)}} <br>
          Image: <br> <img :src="imagePath + element.poster_path">
        </li>
      </ul>
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
    data(){
      return{
        imagePath: 'https://image.tmdb.org/t/p/w342',
      }
    }
}
</script>

<style>

</style>