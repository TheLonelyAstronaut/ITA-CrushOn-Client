import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { AuthenticationParamList } from '../../../core/presentation/navigation/authentication/routing.types';
import { LoginScreen } from '../../../features/login/presentation/login.component';
import { RegistrationScreen } from '../../../features/registration/presentation/registration.component';

const Stack = createStackNavigator<AuthenticationParamList>();

export const AuthenticationNavigator: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <Stack.Screen name={'Login'} component={LoginScreen} />
            <Stack.Screen name={'Registration'} component={RegistrationScreen} />
        </Stack.Navigator>
    );
};
