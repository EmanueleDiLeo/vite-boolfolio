<script>
import axios from 'axios';
import {store} from '../data/store';
import Loader from '../components/partials/Loader.vue'

export default {
  name:'ShowProject',
  data() {
    return {
      project:{},
      isLoader: false,
    }
  },
  components:{
    Loader
  },
  methods: {
    getApi(slug){
      axios.get(store.apiUrl + 'projects/get-project/' + slug)
        .then(results => {
          console.log(results.data);
          if(!results.data.success){
            this.$router.push({ name: 'error-404' })
          }
          this.isLoader = true;
          this.project = results.data.project;
        })
    }
  },
  mounted(){
    this.getApi(this.$route.params.slug);
  }

}
</script>

<template>
  <div class="container">
    <Loader v-if="!isLoader"/>
    <div class="container" v-else>
      
      <h1>Dettagli progetto {{ project.name }}</h1>
      <div class="w-50">
        <img class="img-fluid" :src="project.image" :alt="project.name">
      </div>
      <span> <strong>Numero versione:</strong>  v-{{ project.version }} | <strong>Data ultimo aggiornamento:</strong> {{ project.date_updated }}</span>
      <p v-html="project.description"></p>
    </div>
  </div>
</template>


<style>

</style>