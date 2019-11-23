<template>
  <div class="analyze">
    <h1>Analiza Twojej rośliny</h1>

    <div id="preview"></div>

    <div class="description">
      <v-card
              class="mx-auto"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <div class="overline mb-4"></div>
            <v-list-item-title class="h4">Nazwa choroby / diagnoza</v-list-item-title>
            <v-list-item-subtitle>Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-avatar
                  tile
                  size="50"
                  color="grey"
          >80%</v-list-item-avatar>
        </v-list-item>
      </v-card>

      <v-card
              color="#385F73"
              dark
      >
        <v-card-title class="headline">Opis diagnozy - tytuł</v-card-title>

        <v-card-text>
          <p>{{analysisData }}</p>
        </v-card-text>

      </v-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Analyze",
    data: () => {
      return {
        analysisData: [],
      };
    },
    computed: {
      imgData() {
        return this.$store.getters.getImg;
      }
    },
    methods: {
      getData() {
          this.$http.get('https://www.dev031.kiratik-devs.de/api/reports?count=1').then( result => {
              this.analysisData = result.data;
          });
      }
    },
    mounted() {
      const imgData = window.localStorage.getItem('agr_tech_imageToCheck');
      const preview = document.getElementById('preview');
      preview.style.backgroundImage = `url(${imgData})`;
      this.getData();
    }
  }
</script>

<style scoped>

</style>
