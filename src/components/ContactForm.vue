<script>
import axios from 'axios';
import {store} from '../data/store';
import Loader from '../components/partials/Loader.vue'
export default {
  name:'ContactForm',
  data(){
    return{
      name:'',
      email:'',
      message:'',
      success:false,
      isLoading:false,
      errors:{
        name:[],
        email:[],
        message:[],
      }
    }
  },
  components:{
    Loader
  },
  methods:{
    sendForm(){
      console.log('OK')
      this.isLoading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      }
      console.log(data);
      axios.post(store.apiUrl + 'send-email',data)
        .then(response =>{
          this.isLoading = false;
          console.log(response.data);
          this.success = response.data.success;
          // console.log(this.success);
          if(!this.success){
            this.errors = response.data.errors
          }
        })
        .catch(error =>{
          console.log(error);
        })
    },
  }, 
}
</script>

<template>

  <div class="">
    <form v-if="!success" @submit.prevent="sendForm()"> 

      <div v-if="!isLoading">
        <div class="mb-3">
          <label for="name" class="form-label">Nome</label>
          <input v-model="name" class="form-control" type="text" name="name" id="name">
          <p class="error" v-for="(error,id) in errors.name" :key="id">{{ error }}</p>
        </div>

        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input v-model="email" class="form-control" type="text" name="email" id="email">
          <p class="error" v-for="(error,id) in errors.email" :key="id">{{ error }}</p>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">Messaggio</label>
          <textarea class="form-control" v-model="message" name="message" id="message" cols="30" rows="10"></textarea>
          <p class="error" v-for="(error,id) in errors.message" :key="id">{{ error }}</p>
        </div>

        <div>
          <button type="submit" class="btn btn-primary">Invia</button>
        </div>
      </div>

      <Loader v-else/>
      
    </form>
    <div v-else>
      <h4 class="text-center">Email inviata corettamente</h4>
    </div>

  </div>
  
</template>

<style lang="scss" scoped>
  .error{
    color:red
  }
</style>