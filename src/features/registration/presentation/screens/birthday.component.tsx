import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { AuthBackground } from '../../../../core/presentation/components/container/auth-background.styled';
import { AuthInputContainer } from '../../../../core/presentation/components/container/auth-input-container.styled';
import { Button } from '../../../../core/presentation/components/container/button-container.styled';
import { Buttons } from '../../../../core/presentation/components/container/buttons-container.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Label } from '../../../../core/presentation/components/text/label.styled';
import { SeparatorVerticalType } from '../../../../core/presentation/themes/types';
import { AppealContainer } from '../components/styled/appeal-container.styled';
import { Appeal } from '../components/styled/appeal-text.styled';
import { BirthdayScreenNavigationProp } from '../navigation/routing.types';

export type BirthdayScreenProps = {
    navigation: BirthdayScreenNavigationProp;
};

export const BirthdayScreen: React.FC<BirthdayScreenProps> = (props: BirthdayScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();

    const currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 18);
    const [date, setDate] = useState(currentDate);

    const goBack = useCallback(() => {
        props.navigation.goBack();
    }, [props]);
    const goNext = useCallback(() => {
        props.navigation.navigate('City');
    }, [props]);

    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>{t('appeals.selectBirthday')}</Appeal>
            </AppealContainer>

            <AuthInputContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <DatePicker
                    mode={'date'}
                    date={date}
                    onDateChange={setDate}
                    maximumDate={currentDate}
                    textColor={currentTheme.colors.text}
                    fadeToColor={'none'}
                />

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <Button onPress={goNext}>
                    <Label>{t('auth.continue')}</Label>
                </Button>

                <Button onPress={goBack}>
                    <Label>{t('auth.return')}</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};
