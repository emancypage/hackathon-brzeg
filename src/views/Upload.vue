<template>
  <div class="upload">
    <h1>Dodaj zdjęcie</h1>
    <v-file-input
            label="File input"
            filled
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
              preview.appendChild(img); // Assuming that "preview" is the div output where the content will be displayed.

              const reader = new FileReader();
              reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
              reader.readAsDataURL(file);
            }
        }
    }
</script>
