 <style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat";
  #product{
    @include fill-parent();
  }
  

 </style>
 
 <template>
 
  <div :class="sidbarEtat" v-if="isLoaded && ProductIsLoaded">
    <!-- <router-view></router-view> -->
    <!-- <loader v-if="loading"></loader> -->
    <arianne :path="currentPath"></arianne>
    <category :data="categorie"></category>
    <catlist
      v-if="isLoaded && hasChildren(categorie)"
      :items="categorie.children">
    </catlist>
    <div id="product">
      <product v-if="ProductIsLoaded" :products="products">
      </product>
      <loader v-else></loader>
    </div>
    
  </div>
</template>

<script>
  import filArianne from 'src/Modules/FilAriane/Templates/filarianne'
  import category from '../Templates/category'
  import catlist from '../Templates/categories-list'
  import productList from 'src/Modules/Produits/Templates/productList'
  import _ from 'lodash'
  import loader from 'src/Modules/Loader/Templates/loader'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Categorie_transition',
    data () {
      return {
      }
    },
    watch: {
      $route () {
        this.selectCategorie()
      }
    },
    computed: {
      desc () {
        if (!_.isEmpty(this.categorie)) {
          if (_.isEmpty(this.categorie.extrait)) {
            return this.categorie.content
          } else {
            return this.categorie.extrait
          }
        }
      },
      ...mapGetters({
        categories: 'categories',
        products: 'products',
        currentPath: 'categoriePath',
        categorie: 'categorie',
        sidbarEtat: 'etat',
        isLoaded: 'isCategorieLoaded',
        ProductIsLoaded: 'isProductLoaded'
      })
    },
    metaInfo () {
      if (this.isLoaded && !_.isEmpty(this.categorie)) {
        return {
          title: this.categorie.name + ' | ',
          meta: [{
            name: 'description',
            content: this.desc
          }]
        }
      }
    },
    methods: {
      hasChildren (child) {
        console.log(child)
        return child !== undefined
      },
      ...mapActions({
        getProducts: 'getProducts',
        selectCategorie: 'selectCategorie'
      })
    },
    mounted () {
    },
    components: {
      category,
      'product': productList,
      loader,
      catlist,
      'arianne': filArianne
    }
  }
</script>