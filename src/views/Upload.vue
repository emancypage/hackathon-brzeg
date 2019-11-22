<template>
  <div class="upload pa-4">
    <h1>Dodaj zdjęcie</h1>
    <v-file-input
            label="Zdjęcie"
            accept="image/*"
            prepend-icon="mdi-camera"
            capture="camera"
            @change="onFilePicked"
    ></v-file-input>
    <div id="preview"></div>

  </div>
</template>

<script>
    export default {
        name: "Upload",

        methods: {
            onFilePicked(file) {
              const preview = document.getElementById('preview');
              const img = document.createElement("img");
              img.classList.add("obj");
              img.file = file;
              preview.appendChild(img);

              const reader = new FileReader();
              reader.onload = (function() { return function(e) { preview.style.backgroundImage = `url(${e.target.result})`; }; })(img);
              reader.readAsDataURL(file);
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