<template>
  <nav>
    <v-app-bar>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="grey--text"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Agro</span>
        <span>Tech</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app temporary v-model="drawer" class="primary">
      <v-list>
        <v-list-item v-for="(link, key) in links" :key="key" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
          drawer: false,
          links: [
              { icon: 'mdi-camera', text: 'Dodaj zdjęcie', route: '/' },
              { icon: 'mdi-flower', text: 'Analiza', route: '/analyze' },
              { icon: 'mdi-information', text: 'O aplikacji', route: '/about' },
          ]
      }
    }
  }
</script>

<style>
</style>
