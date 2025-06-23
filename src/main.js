import { createApp, h } from 'vue';
import singleSpaVue from 'single-spa-vue';
import routes from '@/router/router'
import App from './App.vue';
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import 'vuetify/styles'

const myCustomLightTheme = {
    dark: false,
    colors: {
        primary: '#4CAF50', // ✅ your new primary color (e.g., green)
        secondary: '#03A9F4', // optional
        error: '#FF5252', // optional
        background: '#222222',
    },
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'myCustomLightTheme',
        themes: {
            myCustomLightTheme,
        },
    },
})
const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {
                // single-spa props are available on the "this" object. Forward them to your component as needed.
                // https://single-spa.js.org/docs/building-applications#lifecycle-props
                // if you uncomment these, remember to add matching prop definitions for them in your App.vue file.
                // name: this.name,
                // mountParcel: this.mountParcel,
                // singleSpa: this.singleSpa,
            });
        },
    },
    handleInstance: (app) => {
        app.use(routes)
        app.use(vuetify)
    }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
