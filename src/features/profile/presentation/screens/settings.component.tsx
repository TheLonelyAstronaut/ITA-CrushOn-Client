/* eslint-disable react/no-unescaped-entities */
import React, { useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ThemeConsumer, useTheme } from "styled-components/native";

import { DoneButton } from "../../../../core/presentation/components/button/done-button.styled";
import { Center } from "../../../../core/presentation/components/container/center.styled";
import { Colored } from "../../../../core/presentation/components/container/colored-container.styled";
import { Header } from "../../../../core/presentation/components/container/header-container.styled";
import { SafeArea } from "../../../../core/presentation/components/container/safe-area-themed.styled";
import { SeparatorVertical } from "../../../../core/presentation/components/container/separator-vertical.styled";
import { Text } from "../../../../core/presentation/components/text/text.styled";
import { SeparatorVerticalType, TextType } from "../../../../core/presentation/themes/types";
import { SelectableTextedButton } from "../components/selectable-texted-button.component";
import { Separator } from "../components/styled/separator-view.styled";
import { SettingsScreenNavigationProp } from "../navigation/routing.types";



export type SettingsScreenProps = {
    navigation: SettingsScreenNavigationProp
};

export const SettingsScreen: React.FC<SettingsScreenProps> = (props: SettingsScreenProps) => {
    const insets = useSafeAreaInsets();
    const { t, i18n } = useTranslation();
    const theme = useTheme();

    const selectEn = useCallback(
        () => {
            i18n.changeLanguage('en');
        },
        [i18n]
    );
    const selectRu = useCallback(
        () => {
            i18n.changeLanguage('ru');
        },
        [i18n]
    );
    const selectBe = useCallback(
        () => {
            i18n.changeLanguage('be');
            console.log(theme.dimensions.height -
                insets.top -
                insets.bottom -
                theme.tabBarHeight -
                theme.spacer);
            console.log(theme.dimensions.width - theme.spacer*2);
        },
        [i18n, theme, insets]
    );

    const selectAutoTheme = useCallback(
        () => {},
        []
    );
    const selectLightTheme = useCallback(
        () => {},
        []
    );
    const selectDarkTheme = useCallback(
        () => {},
        []
    );


    const done = useCallback(
        () => {
            props.navigation.goBack();
        },
        [props]
    );

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
            <Colored style={{flexDirection: 'column'}}>
                <SelectableTextedButton onPress={selectEn} selected={i18n.language === 'en' ? true : false} text={'English'}/>
                <Separator/>
                <SelectableTextedButton onPress={selectRu} selected={i18n.language === 'ru' ? true : false} text={'Русский'}/>
                <Separator/>
                <SelectableTextedButton onPress={selectBe} selected={i18n.language === 'be' ? true : false} text={'Беларуская'}/>
            </Colored>

            <SeparatorVertical height={SeparatorVerticalType.small}/>

            <Header>
                <Text type={TextType.header}>{t('settings.theme')}</Text>
            </Header>
            <Colored style={{flexDirection: 'column'}}>
                <SelectableTextedButton onPress={selectAutoTheme} selected={true} text={t('settings.auto')}/>
                <Separator/>
                <SelectableTextedButton onPress={selectLightTheme} selected={false} text={t('settings.light')}/>
                <Separator/>
                <SelectableTextedButton onPress={selectDarkTheme} selected={false} text={t('settings.dark')}/>
            </Colored>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>{t('common.done')}</Text>
            </DoneButton>
        </SafeArea>
    );
};
