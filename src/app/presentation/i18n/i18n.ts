import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { be, en, ru } from '../../../locales/locales';

const LANGUAGES = {
    en,
    ru,
    be,
};

const LANG_CODES = Object.keys(LANGUAGES);

const languageDetector = {
    type: 'languageDetector',
    async: true,
    detect: (cb) => {
        const findBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(LANG_CODES);
        cb(findBestAvailableLanguage?.languageTag || 'en');
    },
    init: () => {},
    cacheUserLanguage: () => {},
};

i18next.use(languageDetector).use(initReactI18next).init({
    fallbackLng: 'en',
    debug: true,
    resources: LANGUAGES,
});
