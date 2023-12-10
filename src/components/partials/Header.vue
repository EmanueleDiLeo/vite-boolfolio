<script>
export default{
  name: 'Header',
}

</script>

<template>
<header>
  <nav>
    <ul class="d-flex justify-content-center">
      <li>
        <router-link :to="{name: 'home'}">Home</router-link>
      </li>
      <li>
        <router-link :to="{name: 'project'}">Progetti</router-link>
      </li>
      <li>
        <router-link :to="{name: 'about'}">Chi Siamo</router-link>
      </li>
    </ul>
  </nav>
</header>


</template>

<style lang="scss" scoped>
  header{
    ul{
      list-style: none;
      li{
        padding: 10px;
        a{
          text-decoration: none;
          color: white; 
          &:hover{
            border-bottom: 1px solid white;
          }
          &.active{
            border-bottom: 3px solid white;
          }
        }
      }
    }
  }
</style>