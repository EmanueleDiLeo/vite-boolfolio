<script>
export default {
  name:'ContactForm',
  methods:{
    sendForm(){
      console.log('OK')
    },
  },
}
</script>

<template>

  <div class="">
    <form @submit.prevent="sendForm()"> 

      <div class="mb-3">
        <label for="name" class="form-label">Nome</label>
        <input class="form-control" type="text">
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input class="form-control" type="text">
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">Messaggio</label>
        <textarea class="form-control" name="message" id="message" cols="30" rows="10"></textarea>
      </div>

      <div>
        <button type="submit" class="btn btn-primary">Invia</button>
      </div>

    </form>
  </div>
  
</template>

<style>

</style>