import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': require('./en.json'),
    'ar': require('./ar.json'),
    'de': require('./de.json'),
    'tr': require('./tr.json'),
    'fr': require('./fr.json'),
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    seo: true,
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n