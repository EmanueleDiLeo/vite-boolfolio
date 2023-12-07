<script>
import axios from 'axios';
import {store} from './data/store';
import ContainerCard from './components/ContainerCard.vue';
import Loader from './components/partials/Loader.vue';
import Navigator from './components/partials/Navigator.vue';

export default{
  name: 'App',
  components: {
    ContainerCard,
    Loader,
    Navigator,
  },
  data(){
    return {
      isLoader:false,
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl + 'projects')
        .then(results => {
          this.isLoader = true;
          console.log(results.data.data);
          store.projects = results.data.data;
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
    <Loader v-if="!isLoader"/>
    <div v-else>
      <ContainerCard />
      <Navigator />
    </div>
  </div>

</template>

<style lang="scss">

</style>
