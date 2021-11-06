import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, Text, Button } from 'react-native';
import { LoginScreenNavigationProp } from './navigation/routing.types';

export type LoginScreenProps = {
    navigation: LoginScreenNavigationProp;
};

export const LoginScreen: React.FC<LoginScreenProps> = (props: LoginScreenProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                Login screen
            </Text>
            <Button
                title="sign in"
                onPress={() => {
                    props.navigation.navigate('Tabs');
                }}
            />
            <Button
                title="sign up"
                onPress={() => {
                    props.navigation.navigate('Registration');
                }}
            />
        </SafeAreaView>
    );
};
