import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { AuthenticationParamList } from '../../../core/presentation/navigation/authentication/routing.types';
import { LoginScreen } from '../../../features/login/presentation/components/login.component';

import { RegistrationNavigator } from './registration-navigator.component';

const AuthStack = createStackNavigator<AuthenticationParamList>();

export const AuthenticationNavigator: React.FC = () => {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Login">
            <AuthStack.Screen name={'Login'} component={LoginScreen} />
            <AuthStack.Screen name={'Registration'} component={RegistrationNavigator} />
        </AuthStack.Navigator>
    );
};
