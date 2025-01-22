import { createApp } from 'vue';
import App from './App.vue';
import 'materialize-css/dist/css/materialize.min.css';
import eslintPluginVue from "eslint-plugin-vue";

export default {
    extends: [
        "plugin:vue/vue3-recommended"
    ],
    rules: {
        "vue/script-setup-uses-vars": "error"
    }
};

createApp(App).mount('#app') ;