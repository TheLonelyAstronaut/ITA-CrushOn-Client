import React from 'react';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RootNavigatorParamList } from '../../../core/presentation/navigation/root/routing.types';
import { ExpandedCardScreen } from '../../../features/expanded-card/presentation/expanded-card.component';
import { AuthenticationNavigator } from './authentication-navigator.component';
import { TabNaviagtor } from './tab-navigator.component';
import { ChatScreen } from '../../../features/chat/presentation/chat.component';
import { ProfileEditScreen } from '../../../features/profile-edit/presentation/profile-edit.component';

const RootStack = createStackNavigator<RootNavigatorParamList>();

export const RootNavigator = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
            }}
        >
            <RootStack.Screen name={'Auth'} component={AuthenticationNavigator} />
            {
                // Fix typos
            }
            <RootStack.Screen name={'Tabs'} component={TabNaviagtor} />
            <RootStack.Screen name={'ExpandedCard'} component={ExpandedCardScreen} />
            <RootStack.Screen name={'Chat'} component={ChatScreen} />
            <RootStack.Screen name={'ProfileEdit'} component={ProfileEditScreen} />
        </RootStack.Navigator>
    );
};
