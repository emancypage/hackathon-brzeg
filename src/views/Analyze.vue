<template>
  <div class="analyze">
    <h1>Analiza Twojej rośliny</h1>

    <div id="preview"></div>

    <div class="description">
      <v-card
              dark
              color="#367c2b"
              class="mx-auto my-2"
      >
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title class="title">{{ analysisData.diagnosis }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-avatar
                  size="50"
                  color="#f2f2f2"
                  style="color: #000000"
          >{{ analysisData.probability }}</v-list-item-avatar>
        </v-list-item>
      </v-card>

      <v-card
              color="#f2f2f2"
              class="my-2"
      >
        <v-card-title class="headline">Opis</v-card-title>

        <v-card-text>
          <p>{{ analysisData.description }}</p>
        </v-card-text>

      </v-card>

      <v-card
              color="#f2f2f2"
              class="my-2"
      >
        <v-card-title class="headline">Leczenie</v-card-title>

        <v-card-text>
          Środki ochrony roślin
          <p>Nazwa: <b>{{ computedPestiData.col2 }}</b></p>
          <p>Składnik aktywny: <b>{{ computedPestiData.col3 }}</b></p>

          <v-btn :href='linkToShop+computedSearchString' target="_blank">Zamów</v-btn>
          <br>
          <small>Dane dopuszczonych preparatów wg. <a href="https://www.dane.gov.pl/">https://www.dane.gov.pl/</a></small>
        </v-card-text>

      </v-card>
    </div>
  </div>
</template>

<!--"headers_map": {-->
<!--"col1": "LP",-->
<!--"col2": "Nazwa środka",-->
<!--"col3": "Substancja czynna oraz jej zawartość",-->
<!--"col4": "Numer zezwolenia",-->
<!--"col5": "Rodzaj środka",-->
<!--"col6": "Uwagi"-->
<!--},-->

<script>
  export default {
    name: "Analyze",
    data: () => {
      return {
        analysisData: {},
        pesticidesData: {},
        searchString: '',
        linkToShop: 'https://agrosimex.pl/?s=',
          linkToShop2: 'https://www.sklepfarmera.pl/catalogsearch/result/?cat=0&q='
      };
    },
    computed: {
      imgData() {
        return this.$store.getters.getImg;
      },
      computedPestiData() {
          return this.pesticidesData;
      },
      computedSearchString() {
          return this.searchString;
      }
    },
    methods: {
      getData() {
          this.$http.get('https://www.dev031.kiratik-devs.de/api/reports?count=1').then( result => {
              this.analysisData = result.data.data[0];
          }).then(() => {
              this.$http.get(this.analysisData.medicines).then( result => {
                  this.pesticidesData = result.data.data.attributes;
                  this.searchString = this.pesticidesData.col2;
              });
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
