<script>
import {store} from '../data/store'
import ProjectCard from './partials/ProjectCard.vue';

export default{
  name: 'ContainerCard',
  components: {
    ProjectCard
  },
  data(){
    return {
      store,
      titolo : "I Miei Progetti",
    }
  },
  methods:{
  },
  mounted(){

  }
}

</script>

<template>

  <h1 class="text-center">{{ titolo }}</h1>
  <div class="row">
    <div class="col-4 py-3" v-for="project in store.projects" :key="project.id">
      <ProjectCard :project="project"/>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>
