<style lang="scss">
  ul {
    list-style: none;
    padding: 0px;
  }  
</style>

<template>
  <div id="admin-nav">
    <div class="logo">
      <router-link :to="{name: 'home'}"><img src="/static/Imperial-International.png" alt=""></router-link>
    </div>
    <ul class="__root_menu">
      <!-- <li><router-link :to="{name: 'produit'}">Catégorie</router-link></li> -->
      <li><router-link :to="{name: 'produitIndex'}" class="__item_menu"><workIcone></workIcone></router-link></li>
      <li><!-- <router-link :>Projet</router-link> --></li>
    </ul>
  </div>
</template>

<script>
  import logo from 'src/Modules/Icones/Templates/logo'
  import workIcone from 'src/Modules/Icones/Templates/worksIcone'

  export default {
    name: 'adminNav',
    components: {
      logo,
      workIcone
    }
  }
</script>