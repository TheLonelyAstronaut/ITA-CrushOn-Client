import i18next, { Module } from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import { logger } from '../../../core/util/logger.util';
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
    detect: (cb: (data: string) => void) => {
        const findBestAvailableLanguage = RNLocalize.findBestAvailableLanguage(LANG_CODES);
        cb(findBestAvailableLanguage?.languageTag || 'en');
    },
    init: () => ({}),
    cacheUserLanguage: () => ({}),
} as Module;

i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        resources: LANGUAGES,
    })
    .catch(logger.error);
