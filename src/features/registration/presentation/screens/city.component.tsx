import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { getCitiesData } from '../../../../core/data/store/remote-config/remote-config.selectors';
import { ActiveButton } from '../../../../core/presentation/components/auth/active-button.component';
import { AuthBackground } from '../../../../core/presentation/components/container/auth-background.styled';
import { AuthInputContainer } from '../../../../core/presentation/components/container/auth-input-container.styled';
import { Button } from '../../../../core/presentation/components/container/button-container.styled';
import { Buttons } from '../../../../core/presentation/components/container/buttons-container.styled';
import { Header } from '../../../../core/presentation/components/container/header-container.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { HeaderText } from '../../../../core/presentation/components/text/auth-header-text.styled';
import { Label } from '../../../../core/presentation/components/text/label.styled';
import { SeparatorVerticalType } from '../../../../core/presentation/themes/types';
import { useResolveLocalizedString } from '../../../../core/util/resolve-localized-string.util';
import { REGISTRATION } from '../../data/store/registration.actions';
import { getRegistrationData } from '../../data/store/registration.selectors';
import { AppealContainer } from '../components/styled/appeal-container.styled';
import { Appeal } from '../components/styled/appeal-text.styled';
import { CityScreenNavigationProp } from '../navigation/routing.types';

export type CityScreenProps = {
    navigation: CityScreenNavigationProp;
};

export const CityScreen: React.FC<CityScreenProps> = (props: CityScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const registrationData = useSelector(getRegistrationData);
    const citiesData = useSelector(getCitiesData);
    const citiesNames = useResolveLocalizedString(citiesData);

    const cities = citiesData.map((item, index) => {
        return {
            label: citiesNames[index],
            value: item.id,
        };
    });
    const [cityId, setCityId] = useState<number>(citiesData[0].id);
    const [isOpen, setIsOpen] = useState(false);

    const goBack = useCallback(() => {
        props.navigation.goBack();
    }, [props]);

    const goNext = useCallback(() => {
        dispatch(
            REGISTRATION.SEND_REGISTRATION_DATA({
                ...registrationData,
                city: cityId,
                bio: 'empty bio',
            })
        );
    }, [dispatch, registrationData, cityId]);

    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>{t('appeals.selectCity')}</Appeal>
            </AppealContainer>
            <AuthInputContainer behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}>
                <Header>
                    <HeaderText>{t('auth.city')}</HeaderText>
                </Header>
                <DropDownPicker
                    open={isOpen}
                    setOpen={setIsOpen}
                    items={cities}
                    value={cityId}
                    // eslint-disable-next-line
                    // @ts-ignore
                    setValue={setCityId}
                    multiple={false}
                    closeAfterSelecting={true}
                    closeOnBackPressed={true}
                    dropDownContainerStyle={{
                        paddingHorizontal: currentTheme.spacer * 1.5,
                        borderWidth: 1,
                        borderColor: currentTheme.colors.componentLabel,
                        borderBottomWidth: 0,
                        paddingVertical: currentTheme.spacer,
                        borderRadius: currentTheme.borderRadius.medium,
                    }}
                    style={{
                        borderWidth: 1,
                        borderColor: currentTheme.colors.componentLabel,
                        borderRadius: currentTheme.borderRadius.medium,
                    }}
                    containerStyle={{}}
                    labelStyle={{
                        //color: currentTheme.colors.componentLabel,
                        fontSize: currentTheme.fontSize.large,
                    }}
                    listItemContainerStyle={{
                        alignItems: 'center',
                        borderColor: currentTheme.colors.componentLabel,
                        borderWidth: 1,
                        borderRadius: currentTheme.borderRadius.small,
                        marginVertical: currentTheme.spacer / 4,
                        marginHorizontal: currentTheme.spacer,
                        paddingBottom: currentTheme.spacer,
                        paddingTop: (currentTheme.spacer * 6) / 8,
                    }}
                    listItemLabelStyle={{
                        color: currentTheme.colors.componentLabel,
                        fontSize: currentTheme.fontSize.large,
                    }}
                />
                {/* <SearchableDropdown
                    onItemSelect={(item: string, index: number) => {
                        setCity(citiesData[index]);
                        setInput(item);
                    }}
                    textInputProps={{
                        defaultValue: input,
                        value: input,
                        onChange: ({ nativeEvent: { text } }) => setInput(text),
                        clearButtonMode: 'always',
                        autoCorrect: false,
                        placeholder: t('common.placeholder'),
                        placeholderTextColor: currentTheme.colors.componentLabel,
                        style: {
                            color: currentTheme.colors.text,
                            fontSize: currentTheme.fontSize.medium,
                            borderRadius: currentTheme.borderRadius.small,
                            backgroundColor: currentTheme.colors.component,
                            paddingTop: (currentTheme.spacer * 3) / 4,
                            paddingBottom: currentTheme.spacer,
                            paddingLeft: currentTheme.spacer,
                        },
                    }}
                    items={cities}
                    itemStyle={{
                        alignItems: 'center',
                        borderColor: currentTheme.colors.componentLabel,
                        borderWidth: 1,
                        borderRadius: currentTheme.borderRadius.small,
                        marginVertical: currentTheme.spacer / 4,
                        marginHorizontal: currentTheme.spacer,
                        paddingBottom: currentTheme.spacer,
                        paddingTop: (currentTheme.spacer * 6) / 8,
                    }}
                    itemTextStyle={{
                        color: currentTheme.colors.componentLabel,
                        fontSize: currentTheme.fontSize.large,
                    }}
                    itemsContainerStyle={{
                        maxHeight: Platform.OS === 'ios' || currentTheme.dimensions.height >= 650 ? 167 : 90,
                        paddingVertical: 1,
                    }}
                    listProps={{ nestedScrollEnabled: true, showsVerticalScrollIndicator: false }}
                /> */}

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton onPress={goNext} active={true} label={t('auth.continue')} />

                <Button onPress={goBack}>
                    <Label>{t('auth.return')}</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};
