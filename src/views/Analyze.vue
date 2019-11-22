<template>
  <div class="analyze">
    <h1>Analiza Twojej rośliny</h1>

    <div id="preview"></div>
  </div>
</template>

<script>
  export default {
    name: "Analyze",
    computed: {
      imgData() {
        return this.$store.getters.getImg;
      }
    },
    mounted() {
      const imgData = window.localStorage.getItem('agr_tech_imageToCheck');
      const preview = document.getElementById('preview');
      preview.style.backgroundImage = `url(${imgData})`;
    }
  }
</script>

<style scoped>

</style>
