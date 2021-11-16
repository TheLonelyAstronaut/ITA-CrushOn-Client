import React from 'react';
// eslint-disable-next-line import/order
import { createStackNavigator } from '@react-navigation/stack';

import { ProfileNavigatorParamList } from '../../../core/presentation/navigation/profile/routing-types';
import { EditProfileScreen } from '../../../features/profile/presentation/screens/edit-profile.component';
import { PassionsScreen } from '../../../features/profile/presentation/screens/passions.component';
import { ProfileScreen } from '../../../features/profile/presentation/screens/profile.component';

const ProfileStack = createStackNavigator<ProfileNavigatorParamList>();

export const ProfileNavigator: React.FC = () => {
    return (
        <ProfileStack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Profile'>
            <ProfileStack.Screen name='Profile' component={ProfileScreen}/>
            <ProfileStack.Screen name='EditProfile' component={EditProfileScreen}/>
            <ProfileStack.Screen name='Passions' component={PassionsScreen}/>
        </ProfileStack.Navigator>
    )
}