<script>
import axios from 'axios';
import {store} from '../data/store';

export default {
  name:'ShowProject',
  data() {
    return {
      project:{}
    }
  },
  methods: {
    getApi(slug){
      axios.get(store.apiUrl + 'projects/get-project/' + slug)
        .then(results => {
          this.isLoader = true;
          console.log(results.data);
          this.project = results.data;
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
    <h1>Dettagli progetto {{ project.name }}</h1>
    <span> <strong>Numero versione:</strong>  v-{{ project.version }} | <strong>Data ultimo aggiornamento:</strong> {{ project.date_updated }}</span>
    <p>{{ project.description }}</p>
  </div>
</template>


<style>

</style>