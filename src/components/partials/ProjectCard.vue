<script>
export default{
  name: 'ProjectCard',
  props: {
    project:Object,
  },
}

</script>

<template>

      <div class="card h-100">
        <div class="card-body">
          <h3 class="card-title">{{ project.name }}</h3>
          <p class="card-text"><strong>Versione:</strong> {{project.version }} - <strong>Data:</strong> {{ project.date_updated }}</p>
          <router-link :to="{name: 'showProject', params:{slug: project.slug}}" class="btn btn-info">Info</router-link>
        </div>
      </div>

</template>

<style lang="scss" scoped>

</style>
