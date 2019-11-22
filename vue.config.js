module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pwa: {
    name: 'AgroTech',
    themeColor: '#367c2b',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      favicon72: 'img/icons/icon-72x72.png',
      favicon96: 'img/icons/icon-96x96.png',
      appleTouchIcon: 'img/icons/icon-152x152.png',
      msTileImage: 'img/icons/icon-144x144.png'
    },
    manifestOptions: {
      icons: [
        {
          'src': 'icons/android-chrome-192x192.png',
          'sizes': '192x192',
          'type': 'image/png',
        },
        {
          'src': 'icons/android-chrome-512x512.png',
          'sizes': '512x512',
          'type': 'image/png',
        },
      ],
    }
  }
};
