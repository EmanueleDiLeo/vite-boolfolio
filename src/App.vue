<script>
import axios from 'axios';
import {store} from './data/store';
import ContainerCard from './components/ContainerCard.vue';

export default{
  name: 'App',
  components: {
    ContainerCard
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
    <ContainerCard/>
  </div>

</template>

<style lang="scss">

</style>
