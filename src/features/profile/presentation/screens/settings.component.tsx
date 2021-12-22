import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { ThemesEnum } from '../../../../app/presentation/themes/root.theme';
import { DoneButton } from '../../../../core/presentation/components/button/done-button.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { Colored } from '../../../../core/presentation/components/container/colored-container.styled';
import { Header } from '../../../../core/presentation/components/container/header-container.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Text } from '../../../../core/presentation/components/text/text.styled';
import { SeparatorVerticalType, TextType } from '../../../../core/presentation/themes/types';
import { SET_THEME } from '../../data/store/settings.actions';
import { getTheme } from '../../data/store/settings.selectors';
import { SelectableTextedButton } from '../components/selectable-texted-button.component';
import { Separator } from '../components/styled/separator-view.styled';
import { TextedButton } from '../components/texted-button.component';
import { SettingsScreenNavigationProp } from '../navigation/routing.types';

export type SettingsScreenProps = {
    navigation: SettingsScreenNavigationProp;
};

export const SettingsScreen: React.FC<SettingsScreenProps> = (props: SettingsScreenProps) => {
    const insets = useSafeAreaInsets();
    const { t, i18n } = useTranslation();
    const theme = useSelector(getTheme);
    const dispatch = useDispatch();


    const selectEn = useCallback(() => {
        i18n.changeLanguage('en');
    }, [i18n]);

    const selectRu = useCallback(() => {
        i18n.changeLanguage('ru');
    }, [i18n]);

    const selectBe = useCallback(() => {
        i18n.changeLanguage('be');
    }, [i18n]);


    const selectAutoTheme = useCallback(() => {
        dispatch(SET_THEME.SET(ThemesEnum.AUTO));
    }, [dispatch]);

    const selectLightTheme = useCallback(() => {
        dispatch(SET_THEME.SET(ThemesEnum.LIGHT));
    }, [dispatch]);

    const selectDarkTheme = useCallback(() => {
        dispatch(SET_THEME.SET(ThemesEnum.DARK));
    }, [dispatch]);


    const logOut = useCallback(() => {
        console.log('logged out');
    }, []);

    const done = useCallback(() => {
        props.navigation.goBack();
    }, [props]);

    return (
        <SafeArea edges={['top']}>
            <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

            <Center>
                <Text type={TextType.header}>{t('settings.settings')}</Text>
            </Center>

            <SeparatorVertical height={SeparatorVerticalType.medium} />

            <Header>
                <Text type={TextType.header}>{t('settings.language')}</Text>
            </Header>
            <Colored style={{ flexDirection: 'column' }}>
                <SelectableTextedButton
                    onPress={selectEn}
                    selected={i18n.language === 'en'}
                    text={'English'}
                />
                <Separator />
                <SelectableTextedButton
                    onPress={selectRu}
                    selected={i18n.language === 'ru'}
                    text={'Русский'}
                />
                <Separator />
                <SelectableTextedButton
                    onPress={selectBe}
                    selected={i18n.language === 'be'}
                    text={'Беларуская'}
                />
            </Colored>

            <SeparatorVertical height={SeparatorVerticalType.small} />

            <Header>
                <Text type={TextType.header}>{t('settings.theme')}</Text>
            </Header>
            <Colored style={{ flexDirection: 'column' }}>
                <SelectableTextedButton
                    onPress={selectAutoTheme}
                    selected={theme === ThemesEnum.AUTO}
                    text={t('settings.auto')}
                />
                <Separator />
                <SelectableTextedButton
                    onPress={selectLightTheme}
                    selected={theme === ThemesEnum.LIGHT}
                    text={t('settings.light')}
                />
                <Separator />
                <SelectableTextedButton
                    onPress={selectDarkTheme}
                    selected={theme === ThemesEnum.DARK}
                    text={t('settings.dark')}
                />
            </Colored>
            <SeparatorVertical height={SeparatorVerticalType.large} />

            <Colored>
                <TextedButton onPress={logOut} text={t('settings.logOut')} />
            </Colored>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>{t('common.done')}</Text>
            </DoneButton>
        </SafeArea>
    );
};
