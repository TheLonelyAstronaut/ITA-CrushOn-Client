import React from 'react';
import { Platform, StatusBar, StatusBarStyle, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components/native';

import { LogoSVG } from '../../../../assets/components/logo.component';
import { AuthBackground } from '../../../../core/presentation/components/container/auth-background.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { TextInput } from '../../../../core/presentation/components/text/text-input.styled';
import { SeparatorVerticalType } from '../../../../core/presentation/themes/types';
import { Colored } from '../../../../core/presentation/components/container/colored-container.styled';
import { Header } from '../../../../core/presentation/components/container/header-container.styled';

import { LoginScreenNavigationProp } from '../navigation/routing.types';

import { Button } from './styled/button-container.styled';
import { Buttons } from './styled/buttons-container.styled';
import { HeaderText } from './styled/header-text.styled';
import { Label } from './styled/label.styled';
import { LoginContainer } from './styled/login-input-container.styled';
import { LogoView } from './styled/logo-container.styled';

export type LoginScreenProps = {
    navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    
    return (
        <AuthBackground>
            <StatusBar barStyle={currentTheme.colors.statusBar as StatusBarStyle} />
            <LogoView>
                <Center>
                    <LogoSVG color={currentTheme.colors.logo}/>
                </Center>
                
                <Center>
                    <Text style={{fontSize: 48, color: currentTheme.colors.logo}}>CRUSHON</Text>
                </Center>
            </LogoView>
            
            <LoginContainer behavior={Platform.OS === "ios" ? "padding" : "height"} >
                <Header>
                    <HeaderText>Login</HeaderText>
                </Header>
                <Colored>
                    <TextInput textContentType={'emailAddress'} placeholder={'type here'} placeholderTextColor={currentTheme.colors.componentLabel}/>
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

                <Header>
                    <HeaderText>Password</HeaderText>
                </Header>
                <Colored>
                    <TextInput textContentType={'password'} secureTextEntry={true} placeholder={'type here'} placeholderTextColor={currentTheme.colors.componentLabel}/>
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </LoginContainer>
             
            
            <Buttons insets={insets}>
                <Button onPress={() => {props.navigation.navigate('Tabs')}}>
                    <Label>Login</Label>
                </Button>

                <Button onPress={() => {props.navigation.navigate('Registration')}}>
                    <Label>Sign up</Label>
                </Button>

            </Buttons>


            
        </AuthBackground>
    );
};
