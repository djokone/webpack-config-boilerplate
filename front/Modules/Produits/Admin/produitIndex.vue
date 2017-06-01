<template>
  <div>
    <loader v-if="!isLoaded"></loader>
    <div id="productAdminList" v-if="isLoaded">
      <h2>Liste des produit</h2>
      <table class="index">
        <thead>
          <tr>
            <th class="id">ID</th>
            <th class="name">Name</th>
            <th class="modele">Nb modèles</th>
            <th class="etat">Etat</th>
            <th class="action">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products">
            <td>{{product.id}}</td>
            <td>{{product.name}}</td>
            <td>{{product.sousproduits.length}}</td>
            <td>{{product.online}}</td>
            <td>
              <router-link :to="{name:'produitEdit', params: {id: product.id}}">
                <pen class="icone pen"></pen>
              </router-link>

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import loader from 'src/Modules/Loader/Templates/loader'
  import pen from 'src/Modules/Icones/Templates/pen'
  export default {
    name: 'produitIndex',
    computed: {
      ...mapGetters({
        products: 'allProducts',
        isLoaded: 'isProductLoaded'
      })
    },
    components: {
      loader,
      pen
    }
  }
</script>