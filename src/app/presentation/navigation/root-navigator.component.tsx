import { TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { useSelector } from 'react-redux';

import { getIsAuthenticated } from '../../../core/data/store/user/user.selectors';
import { RootNavigatorParamList } from '../../../core/presentation/navigation/root/routing.types';
import { ChatScreen } from '../../../features/chat/presentation/screens/chat.component';
import { ExpandedCardScreen } from '../../../features/expanded-card/presentation/components/expanded-card.component';

import { AuthenticationNavigator } from './authentication-navigator.component';
import { TabNavigator } from './tab-navigator.component';

const RootStack = createSharedElementStackNavigator<RootNavigatorParamList>();

const createNestedSharedStack = <T extends Record<never, unknown>>(
    routeName: string,
    component: React.FC<T>
): React.FC => {
    const NestedSharedStack = createSharedElementStackNavigator();
    // eslint-disable-next-line react/display-name
    return () => (
        <NestedSharedStack.Navigator headerMode={'none'}>
            <NestedSharedStack.Screen name={routeName} component={component} />
        </NestedSharedStack.Navigator>
    );
};

const Chat = createNestedSharedStack('ChatNested', ChatScreen);

export const RootNavigator: React.FC = () => {
    const isAuthenticated = useSelector(getIsAuthenticated);

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
            {isAuthenticated ? (
                <>
                    <RootStack.Screen name={'Tabs'} component={TabNavigator} />
                    <RootStack.Screen
                        name={'ExpandedCard'}
                        component={ExpandedCardScreen}
                        options={{ gestureEnabled: false }}
                        sharedElements={(route) => {
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
                    <RootStack.Screen name={'Chat'} component={Chat} />
                </>
            ) : (
                <RootStack.Screen name={'Auth'} component={AuthenticationNavigator} />
            )}
        </RootStack.Navigator>
    );
};
