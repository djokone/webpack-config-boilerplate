<template>
  <div id="editionProduitAll">
    <div id="mediaEdit">
      <h2>Editer les images</h2>
      <mediaEdit
        :medias="product.media"
        :model="'produits'"
        :coverId="product.media_id"
        :refId="product.id"
      ></mediaEdit>
    </div> 
    <div id="editionProduit">
      <h2 @click="empty">Editer - {{product.name}}</h2>
      <my-form
        :inputs="inputs"
        :datas="localProduit"
        @output="updatelocalvalue">
        
      </my-form>
    </div>
  </div>
</template>

<script>
  import mediaEdit from 'src/Modules/Medias/Templates/mediaEdit'
  import myForm from 'src/Modules/Elements/Templates/myForm'
  import { mapGetters } from 'vuex'
  import _ from 'lodash'

  export default {
    name: 'produitEdit',
    data () {
      return {
        localProduit: {},
        inputs: [
          {
            label: 'Nom produit :',
            name: 'name'
            // placeholder: 'Doe'
          },
          {
            label: 'Nom de l\'url :',
            name: 'slug',
            placeholder: 'super-produit'
          },
          {
            label: 'Référence :',
            name: 'ref',
            placeholder: 'WSB XXX E'
          },
          {
            label: 'Puissance :',
            name: 'puissance',
            placeholder: '500W'
          },
          {
            label: 'Les dimensions :',
            name: 'dimension',
            placeholder: '120 x 120 x 120'
          },
          {
            label: 'Description',
            name: 'info',
            type: 'tinymce'
          },
          {
            label: 'Modèles',
            name: 'sousproduits',
            forms: [
              {
                label: 'Nom du modèle :',
                name: 'name'
              },
              {
                label: 'Référence :',
                name: 'ref'
              },
              {
                label: 'Poids :',
                name: 'poids'
              },
              {
                label: 'Puissance :',
                name: 'puissance'
              },
              {
                label: 'Prix :',
                name: 'prix'
              },
              {
                label: 'Description :',
                name: 'info',
                type: 'textarea'
              }
            ]
          }
        ]
      }
    },
    mounted () {
      if (this.$route.name === 'produitAdd') {
        this.localProduit = ''
      } else {
        this.localProduit = _.cloneDeep(this.product)
      }
    },
    beforeRouteEnter (to, from, next) {
      if (to.name === 'produitAdd') {
        next(vm => {
          console.log(vm)
          vm.localProduit = ''
        })
      }
      next()
    },
    methods: {
      empty () {
        this.localProduit = 'ehy'
        // this.$delete(this.localProduit)
      },
      updatelocalvalue (data) {
        this.localProduit = _.cloneDeep(data)
      },
      changePage (to, from) {
        console.log(to.name === 'produitAdd')
        console.log('local vidé')
        if (to.name === 'produitAdd') {
          this.localProduit = ''
        }
      }
    },
    computed: {
      ...mapGetters({
        product: 'product'
      })
    },
    watch: {
      product: {
        handler (val, oldVal) {
          console.log(this.$route.name === 'produitAdd')
          if (this.$route.name === 'produitAdd') {
            this.localProduit = ''
          } else {
            this.localProduit = _.cloneDeep(val)
          }
        }
      },
      '$route': 'changePage'
    },
    components: {
      myForm,
      mediaEdit
    }
  }
</script>