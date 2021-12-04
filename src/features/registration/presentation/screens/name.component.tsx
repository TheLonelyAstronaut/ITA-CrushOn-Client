import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { ActiveButton } from '../../../../core/presentation/components/auth/active-button.component';
import { AuthBackground } from '../../../../core/presentation/components/container/auth-background.styled';
import { AuthInputContainer } from '../../../../core/presentation/components/container/auth-input-container.styled';
import { Button } from '../../../../core/presentation/components/container/button-container.styled';
import { Buttons } from '../../../../core/presentation/components/container/buttons-container.styled';
import { Colored } from '../../../../core/presentation/components/container/colored-container.styled';
import { Header } from '../../../../core/presentation/components/container/header-container.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { HeaderText } from '../../../../core/presentation/components/text/auth-header-text.styled';
import { Label } from '../../../../core/presentation/components/text/label.styled';
import { TextInput } from '../../../../core/presentation/components/text/text-input.styled';
import { SeparatorVerticalType } from '../../../../core/presentation/themes/types';
import { AppealContainer } from '../components/styled/appeal-container.styled';
import { Appeal } from '../components/styled/appeal-text.styled';
import { NameScreenNavigationProp } from '../navigation/routing.types';

export type NameScreenProps = {
    navigation: NameScreenNavigationProp;
};

export const NameScreen: React.FC<NameScreenProps> = (props: NameScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();

    const [name, setName] = useState('');

    const goBack = useCallback(() => {
        props.navigation.goBack();
    }, [props]);
    const goNext = useCallback(() => {
        props.navigation.navigate('Gender');
    }, [props]);

    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>{t('appeals.writeName')}</Appeal>
            </AppealContainer>

            <AuthInputContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Header>
                    <HeaderText>{t('auth.name')}</HeaderText>
                </Header>
                <Colored>
                    <TextInput
                        value={name}
                        onChangeText={setName}
                        autoCorrect={false}
                        autoCompleteType={'name'}
                        placeholder={t('common.placeholder')}
                        placeholderTextColor={currentTheme.colors.componentLabel}
                    />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton onPress={goNext} active={name ? true : false} label={t('auth.continue')} />

                <Button onPress={goBack}>
                    <Label>{t('auth.return')}</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};
