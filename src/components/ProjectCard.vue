<script>
import {store} from '../data/store'
export default{
  name: 'ProjectCard',
  data(){
    return {
      store,
      titolo : "I Miei Progetti"
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
      <div class="card h-100">
        <div class="card-body">
          <h4 class="card-title">{{ project.name }}</h4>
          <p class="card-text">Versione: {{project.version }} - Data: {{ project.date_update }}</p>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

</style>
