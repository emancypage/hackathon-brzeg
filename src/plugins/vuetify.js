import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#367c2b',
                success: '#367c2b',
                info: '#ffbd03',
                error: '#FF4000',
            }
        }
    },
    icons: {
        iconfont: 'md',
    },
});
