<template>
  <div class="loading">
    <h2>Loading.</h2>
    <span class="loader"></span>
  </div>
</template>

<script>
export default {
  name:'Loader',

}
</script>

<style lang="scss" scoped>
  .loading{
    // text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 60vh;
    h2{
      font-size: 5rem;
      color: red;
    }
    .loader {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      display: inline-block;
      border-top: 5px solid red;
      border-right: 5px solid transparent;
      box-sizing: border-box;
      animation: rotation 1s linear infinite;
    }
    @keyframes rotation {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    } 
  }
</style>