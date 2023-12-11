<script>
  export default{
    name: 'Navigator',
    props:{
      paginator:Object
    },
  methods: {
      callApi(linkUrl){
        this.$emit('callApi',linkUrl);
      }
    },
  }
</script>

<template>

<div class="nav-wrapper my-3 text-center">
  <button @click="callApi(paginator.firstPageUrl)" :disabled="paginator.currentPage == 1" class="btn btn-light mx-1">
    |&lt;
  </button>

  <button
    v-for="link in paginator.links"
    :key="link.label"
    v-html="link.label"
    :disabled="link.active || !link.url"
    @click="callApi(link.url)"
    class="btn btn-light mx-1">
  </button>

  <button @click="callApi(paginator.lastPageUrl)" 
    :disabled="paginator.currentPage == paginator.lastPage" 
    class="btn btn-light mx-1">
    &gt;|
  </button>
</div>

</template>

<style lang="scss" scoped>

</style>