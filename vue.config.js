module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'AgroTech',
    themeColor: '#367c2b',
    msTileColor: '#000000',
    manifestOptions: {
      icons: [
        {
          'src': 'img/icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'img/icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
        },
      ],
    }
  }
};
