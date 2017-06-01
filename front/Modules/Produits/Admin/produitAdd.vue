<template>
  <div id="editionProduit">
    <h2>Ajouter un produit</h2>
    <my-form
      :inputs="inputs"
      @output="updatelocalvalue"
    >
      
    </my-form>
  </div>
</template>

<script>
  import myForm from 'src/Modules/Elements/Templates/myForm'
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
    },
    methods: {
      updatelocalvalue (data) {
        this.localProduit = _.cloneDeep(data)
      }
    },
    components: {
      myForm
    }
  }
</script>