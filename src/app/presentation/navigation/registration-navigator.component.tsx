// eslint-disable-next-line import/order
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { RegistationParamList } from '../../../core/presentation/navigation/registration/routing.types';
import { BirthdayScreen } from '../../../features/registration/presentation/screens/birthday.component';
import { CityScreen } from '../../../features/registration/presentation/screens/city.component';
import { GenderScreen } from '../../../features/registration/presentation/screens/gender.component';
import { NameScreen } from '../../../features/registration/presentation/screens/name.component';
import { PasswordScreen } from '../../../features/registration/presentation/screens/password.component';
import { PhotoScreen } from '../../../features/registration/presentation/screens/photo.component';
import { UsernameScreen } from '../../../features/registration/presentation/screens/username.component';

const RegistrationStack = createStackNavigator<RegistationParamList>();

export const RegistrationNavigator: React.FC = () => {
    return (
        <RegistrationStack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Username">
            <RegistrationStack.Screen name={'Username'} component={UsernameScreen} />
            <RegistrationStack.Screen name={'Password'} component={PasswordScreen} />
            <RegistrationStack.Screen name={'Name'} component={NameScreen} />
            <RegistrationStack.Screen name={'Gender'} component={GenderScreen} />
            <RegistrationStack.Screen name={'Birthday'} component={BirthdayScreen} />
            <RegistrationStack.Screen name={'City'} component={CityScreen} />
            <RegistrationStack.Screen name={'Photo'} component={PhotoScreen} options={{
                gestureEnabled: false                
            }}/>
        </RegistrationStack.Navigator>
    );
};
