import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, StatusBar, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { LogoSVG } from '../../../../assets/components/logo.component';
import { AuthData } from '../../../../core/model/auth.model';
import { ActiveButton } from '../../../../core/presentation/components/auth/active-button.component';
import { AuthBackground } from '../../../../core/presentation/components/container/auth-background.styled';
import { AuthInputContainer } from '../../../../core/presentation/components/container/auth-input-container.styled';
import { Button } from '../../../../core/presentation/components/container/button-container.styled';
import { Buttons } from '../../../../core/presentation/components/container/buttons-container.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { Colored } from '../../../../core/presentation/components/container/colored-container.styled';
import { Header } from '../../../../core/presentation/components/container/header-container.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { HeaderText } from '../../../../core/presentation/components/text/auth-header-text.styled';
import { Label } from '../../../../core/presentation/components/text/label.styled';
import { TextInput } from '../../../../core/presentation/components/text/text-input.styled';
import { SeparatorVerticalType } from '../../../../core/presentation/themes/types';
import { LOGIN } from '../../data/store/login.actions';
import { LoginScreenNavigationProp } from '../navigation/routing.types';

import { AppsName } from './styled/app-name-text.styled';
import { LogoView } from './styled/logo-container.styled';

export type LoginScreenProps = {
    navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setpassword] = useState('');

    const login = useCallback(() => {
        dispatch(LOGIN.TRIGGER({
            username: email,
            password: password,
        } as AuthData));
    }, [email, password, dispatch]);

    const signUp = useCallback(() => {
        props.navigation.navigate('Registration');
    }, [props]);

    return (
        <AuthBackground>
            <StatusBar
                barStyle={currentTheme.colors.statusBar as StatusBarStyle}
                backgroundColor={currentTheme.colors.auth}
            />
            <LogoView>
                <Center>
                    <LogoSVG color={currentTheme.colors.logo} />
                </Center>

                <Center>
                    <AppsName>CRUSHON</AppsName>
                </Center>
            </LogoView>

            <AuthInputContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                <Header>
                    <HeaderText>{t('auth.login')}</HeaderText>
                </Header>
                <Colored>
                    <TextInput
                        value={email}
                        onChangeText={setEmail}
                        autoCorrect={false}
                        autoCompleteType={'email'}
                        textContentType={'emailAddress'}
                        keyboardType={'email-address'}
                        placeholder={t('common.placeholder')}
                        placeholderTextColor={currentTheme.colors.componentLabel}
                    />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

                <Header>
                    <HeaderText>{t('auth.password')}</HeaderText>
                </Header>
                <Colored>
                    <TextInput
                        value={password}
                        onChangeText={setpassword}
                        autoCompleteType={'password'}
                        textContentType={'password'}
                        secureTextEntry={true}
                        placeholder={t('common.placeholder')}
                        placeholderTextColor={currentTheme.colors.componentLabel}
                    />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton onPress={login} active={email && password ? true : false} label={t('auth.signIn')} />

                <Button onPress={signUp}>
                    <Label>{t('auth.signUp')}</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};
