<script>
import axios from 'axios';
import {store} from '../data/store';
import ContainerCard from '../components/ContainerCard.vue';
import Loader from '../components/partials/Loader.vue';
import Navigator from '../components/partials/Navigator.vue';

export default{
  name: 'Project',
  components: {
    ContainerCard,
    Loader,
    Navigator,
  },
  data(){
    return {
      isLoader:false,
      paginator:{
        links: [],
        firstPageUrl:'',
        lastPageUrl:'',
        currentPage:'',
        lastPage:'',
      },
    }
  },
  methods:{
    getApi(endpoint){
      this.isLoader = false,
      axios.get(endpoint)
        .then(results => {
          this.isLoader = true;
          console.log(results.data.data);
          store.projects = results.data.data;
          this.paginator.links = results.data.links;
          this.paginator.firstPageUrl = results.data.first_page_url;
          this.paginator.lastPageUrl = results.data.last_page_url;
          this.paginator.currentPage = results.data.current_page;
          this.paginator.lastPage = results.data.last_page;
        })
    }
  },
  mounted(){
    this.getApi(store.apiUrl + 'projects');
  }
}

</script>

<template>
  <div class="container">
    <Loader v-if="!isLoader"/>
    <div v-else>
      <ContainerCard />
      <Navigator :paginator="paginator" @callApi="getApi"/>
    </div>
  </div>

</template>

<style lang="scss">

</style>
