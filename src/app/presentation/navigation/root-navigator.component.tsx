import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import { RootNavigatorParamList } from '../../../core/presentation/navigation/root/routing.types';
import { ChatScreen } from '../../../features/chat/presentation/chat.component';
import { ExpandedCardScreen } from '../../../features/expanded-card/presentation/expanded-card.component';
import { ProfileEditScreen } from '../../../features/profile-edit/presentation/profile-edit.component';

import { AuthenticationNavigator } from './authentication-navigator.component';
import { TabNaviagtor } from './tab-navigator.component';


const RootStack = createSharedElementStackNavigator<RootNavigatorParamList>();

export const RootNavigator: React.FC = () => {
    return (
        <RootStack.Navigator
            screenOptions={{
                headerShown: false,
                ...TransitionPresets.ModalSlideFromBottomIOS,
                cardStyle: {
                    backgroundColor: 'transparent',
                },
            }}
        >
            <RootStack.Screen name={'Auth'} component={AuthenticationNavigator} />
            {
                // Fix typos
            }
            <RootStack.Screen name={'Tabs'} component={TabNaviagtor} />
            <RootStack.Screen
                name={'ExpandedCard'}
                component={ExpandedCardScreen}
                options={{ gestureEnabled: false }}
                sharedElements={(route, otherRoute, showing) => {
                    const { user } = route.params;
                    return [
                        {
                            id: `user_image.${user.id}`,
                            //animation: 'fade',
                            //resize: 'stretch'
                            //animation: 'move'
                        },
                    ];
                }}
            />
            <RootStack.Screen name={'Chat'} component={ChatScreen} />
            <RootStack.Screen name={'ProfileEdit'} component={ProfileEditScreen} />
        </RootStack.Navigator>
    );
};
