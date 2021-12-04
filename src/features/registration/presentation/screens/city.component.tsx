/* eslint-disable react-native/no-color-literals */
import React, { useCallback, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SearchableDropdown from 'react-native-searchable-dropdown';
import { useTheme } from "styled-components/native";

import { ActiveButton } from "../../../../core/presentation/components/auth/active-button.component";
import { AuthBackground } from "../../../../core/presentation/components/container/auth-background.styled";
import { AuthInputContainer } from "../../../../core/presentation/components/container/auth-input-container.styled";
import { Button } from "../../../../core/presentation/components/container/button-container.styled";
import { Buttons } from "../../../../core/presentation/components/container/buttons-container.styled";
import { Header } from "../../../../core/presentation/components/container/header-container.styled";
import { SeparatorVertical } from "../../../../core/presentation/components/container/separator-vertical.styled";
import { HeaderText } from "../../../../core/presentation/components/text/auth-header-text.styled";
import { Label } from "../../../../core/presentation/components/text/label.styled";
import { SeparatorVerticalType } from "../../../../core/presentation/themes/types";
import { CitiesData, cityItem } from "../../../../mocks/cities.data";
import { AppealContainer } from "../components/styled/appeal-container.styled";
import { Appeal } from "../components/styled/appeal-text.styled";
import { CityScreenNavigationProp } from "../navigation/routing.types";

export type CityScreenProps = {
    navigation: CityScreenNavigationProp;
};

export const CityScreen: React.FC<CityScreenProps> = (props: CityScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const {t} = useTranslation();
    
    const [city, setCity] = useState('Minsk');

    const goBack = useCallback(
        () => {
            props.navigation.goBack();
        },
        [props]
    );
    const goNext = useCallback(
        () => {
            props.navigation.navigate('Photo');
        },
        [props]
    );
    
    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>{t('appeals.selectCity')}</Appeal>
            </AppealContainer>

            <AuthInputContainer behavior={Platform.OS === "ios" ? "padding" : 'padding'} >
                <Header>
                    <HeaderText>{t('auth.city')}</HeaderText>
                </Header>
                <SearchableDropdown
                    onItemSelect={(item: cityItem) => {
                        setCity(item.name);
                    }}
                    containerStyle={{
                        paddingHorizontal: currentTheme.spacer * 1.5,
                    }}
                    textInputProps={{
                        defaultValue: city,
                        value: city,
                        onChange: ({ nativeEvent: { text } }) => setCity(text),
                        clearButtonMode: 'always',
                        autoCorrect: false,
                        placeholder: t('common.placeholder'),
                        placeholderTextColor: currentTheme.colors.componentLabel,
                        style: {
                            color: currentTheme.colors.text,
                            fontSize: currentTheme.fontSize.medium,
                            borderRadius: currentTheme.borderRadius.small,
                            backgroundColor: currentTheme.colors.component,
                            paddingTop: currentTheme.spacer * 3 / 4,
                            paddingBottom: currentTheme.spacer,
                            paddingLeft: currentTheme.spacer,
                        },
                    }}
                    items={CitiesData}
                    itemStyle={{
                        alignItems: 'center',
                        borderColor: currentTheme.colors.componentLabel,
                        borderWidth: 1,
                        borderRadius: currentTheme.borderRadius.small,
                        marginVertical: currentTheme.spacer / 4,
                        marginHorizontal: currentTheme.spacer,
                        paddingBottom: currentTheme.spacer,
                        paddingTop: currentTheme.spacer * 6 / 8,
                    }}
                    itemTextStyle={{
                        color: currentTheme.colors.componentLabel,
                        fontSize: currentTheme.fontSize.large,
                    }}
                    itemsContainerStyle={{
                        maxHeight: (Platform.OS === 'ios' || currentTheme.dimensions.height >= 650 ) ? 167 : 90,
                        paddingVertical: 1,
                    }}
                    listProps={{ nestedScrollEnabled: true, showsVerticalScrollIndicator: false }}
                />

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton onPress={goNext} active={city ? true : false} label={t('auth.continue')}/>

                <Button onPress={goBack}>
                    <Label>{t('auth.return')}</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};