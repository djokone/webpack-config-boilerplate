<style lang="scss">
  @import "~bourbon/app/assets/stylesheets/bourbon";
  @import "~bourbon-neat/app/assets/stylesheets/neat"; 
  #photo_profil{
    padding: 20px 0px 40px 0px;
    .medias{
      margin-top: 20px;
      @include clearfix;
    }
    .mythumb{
      @include span-columns(4);
      @include omega(3n);
      
    }
    .action {
      .del .pict{
        height: 27px;
        width: 24px;
        background: url(../../../assets/delete.png) bottom;
        background-size:100%
      }
      .thumb .pict{
        height: 24px;
        width: 24px;
        background: url(../../../assets/thumb.png) bottom;
        background-size:100%
      }
    }
  }
</style>

<template>
  <div id="edit_media">
    <div class="medias">
      <div class="mythumb card" v-for="media in medias">
        <thumb 
          :src="media.file" 
          :width="150" 
          :height="150" >
        </thumb>
        <ul class="actions">
          <li>
            <a href="#" @click="changeThumb({mediaId: media.id, userId: refId})" class="action thumb" :class="thumbActive(media.id)" ><div class="pict"></div></a>
          </li>
          <li>
            <a href="#" @click="supprimer(media.id)" class="action del" ><div class="pict"></div></a></li>
        </ul>
      </div>
    </div>
    <dropzone 
      :reference="model" 
      :refid="refId"
      @uploadsuccess="success"
      >
    </dropzone>
  </div>
</template>

<script>
  import dropzone from 'src/Modules/Dropzone/Templates/dropzone'
  import thumb from 'src/Modules/Medias/Templates/thumb'
  export default ({
    props: {
      medias: {
        type: [Object, Array]
      },
      model: {
        type: [String]
      },
      refId: {
        type: [Number]
      },
      coverKey: {
        default: 'media_id'
      },
      coverId: {
        default: false
      }
    },
    methods: {
      success (response) {
        this.$off('uploadSuccess')
        this.$emit('uploadSuccess', response)
      },
      supprimer (id) {
        this.$emit('deleteSuccess', id)
      },
      changeThumb (data) {
        this.$emit('changeThumb', data)
      },
      thumbActive (id) {
        if (this.coverId !== false) {
          if (id === this.coverId) {
            return 'active'
          }
        }
      }
    },
    components: {
      dropzone,
      thumb
    }
  })
</script>