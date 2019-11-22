<template>
  <div class="about">
    <h1>O aplikacji</h1>
    <p>{{ test }}</p>
  </div>
</template>

<script>
  export default {
    name: "About",
    computed: {
      test() {
        return this.$store.state.test;
      }
    }
  }
</script>
