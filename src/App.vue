<script>
import axios from 'axios';
import {store} from './data/store';
import ProjectCard from './components/ProjectCard.vue';

export default{
  name: 'App',
  components: {
    ProjectCard
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
        .then(results => {
          console.log(results.data);
          store.projects = results.data;
        })
    }
  },
  mounted(){
    this.getApi();
  }
}

</script>

<template>
  <div class="container py-5">
    <ProjectCard/>
  </div>

</template>

<style lang="scss">

</style>
