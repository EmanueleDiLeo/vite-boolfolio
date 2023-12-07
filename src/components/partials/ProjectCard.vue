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
        </div>
      </div>

</template>

<style lang="scss" scoped>

</style>
