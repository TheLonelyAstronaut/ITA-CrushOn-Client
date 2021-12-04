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
import { PasswordScreenNavigationProp } from '../navigation/routing.types';

export type PasswordScreenProps = {
    navigation: PasswordScreenNavigationProp;
};

export const PasswordScreen: React.FC<PasswordScreenProps> = (props: PasswordScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();

    const [password, setPassword] = useState('');
    const [repeatedPassword, setRepeatedPassword] = useState('');

    const goBack = useCallback(() => {
        props.navigation.goBack();
    }, [props]);
    const goNext = useCallback(() => {
        props.navigation.navigate('Name');
    }, [props]);

    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>{t('appeals.createPassword')}</Appeal>
            </AppealContainer>

            <AuthInputContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Header>
                    <HeaderText>{t('auth.password')}</HeaderText>
                </Header>
                <Colored>
                    <TextInput
                        value={password}
                        onChangeText={setPassword}
                        autoCompleteType={'password'}
                        textContentType={'newPassword'}
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholder={t('common.placeholder')}
                        placeholderTextColor={currentTheme.colors.componentLabel}
                    />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

                <Header>
                    <HeaderText>{t('auth.repeatPassword')}</HeaderText>
                </Header>
                <Colored>
                    <TextInput
                        value={repeatedPassword}
                        onChangeText={setRepeatedPassword}
                        autoCompleteType={'password'}
                        textContentType={'newPassword'}
                        secureTextEntry={true}
                        autoCorrect={false}
                        placeholder={t('common.placeholder')}
                        placeholderTextColor={currentTheme.colors.componentLabel}
                    />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton
                    onPress={goNext}
                    active={password && repeatedPassword && password === repeatedPassword ? true : false}
                    label={t('auth.continue')}
                />

                <Button onPress={goBack}>
                    <Label>{t('auth.return')}</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};
