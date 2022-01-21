import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export type Locale = {
    en: string;
    ru: string;
    be: string;
};

const resolveLocalizedString = (language: string, data: Locale): string => {
    if (language === 'en') {
        return data.en;
    } else if (language === 'ru') {
        return data.ru;
    } else {
        return data.be;
    }
};

type F<T> = T extends Locale[] ? string[] : string;

export const useResolveLocalizedString = <K extends Locale | Locale[]>(data: K): F<K> => {
    const { i18n } = useTranslation();
    const translate = useCallback((text: Locale) => resolveLocalizedString(i18n.language, text), [i18n.language]);

    return useMemo(() => (Array.isArray(data) ? data.map(translate) : translate(data)), [data, translate]) as F<K>;
};
