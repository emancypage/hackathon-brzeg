<template>
  <div class="upload">
    <h1>Dodaj zdjęcie</h1>
    <v-file-input
            label="Zdjęcie"
            accept="image/*"
            prepend-icon="mdi-camera"
            capture="file"
            @change="onFilePicked"
    ></v-file-input>
    <div id="preview"></div>
    <v-row justify="center">
      <v-btn router to="/analyze" class="mt-4 primary">Idź do analizy</v-btn>
    </v-row>
  </div>
</template>

<script>
  export default {
    name: "Upload",

    computed: {
        imgData() {
          return this.$store.state.imgData;
        }
    },
    methods: {
      onFilePicked: function (file) {
        const preview = document.getElementById('preview');
        let self = this;

        const reader = new FileReader();
        reader.onload = (function () {
          return function (e) {
            self.$store.dispatch('setImg', e.target.result);
            preview.style.backgroundImage = `url(${e.target.result})`;

          }
        })();
        reader.readAsDataURL(file);


      }
    },
    mounted() {
      const imgData = window.localStorage.getItem('agr_tech_imageToCheck');
      if (imgData.length > 0) {
        const preview = document.getElementById('preview');
        preview.style.backgroundImage = `url(${imgData})`;
      }
    }
  }
</script>

<style lang="scss">
  #preview {
    background-size: cover;
    height: 250px;
    border: 2px solid #367c2b;
  }
  img {
    width: 100%;
  }
</style>