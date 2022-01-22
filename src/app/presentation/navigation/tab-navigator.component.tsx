import AnimatedTabBar, { FlashyTabBarItemConfig, TabsConfig } from '@gorhom/animated-tabbar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import { DefaultTheme, useTheme } from 'styled-components';

import { HomeSVG } from '../../../assets/components/cards-icon.component';
import { ChatsListSVG } from '../../../assets/components/chats-list-icon.component';
import { DiscoverSVG } from '../../../assets/components/discover-icon.component';
import { ProfileSVG } from '../../../assets/components/profile-icon.component';
import { TabNavigatorParamList } from '../../../core/presentation/navigation/tab/routing.types';
import { CardsScreen } from '../../../features/cards/presentation/components/cards.component';
import { ChatsListScreen } from '../../../features/chat/presentation/screens/chats-list.component';
import { DiscoverScreen } from '../../../features/discover/presentation/components/discover.component';

import { ProfileNavigator } from './profile-navigator.component';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

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

const Cards = createNestedSharedStack('CardsNested', CardsScreen);
const Discover = createNestedSharedStack('DiscoverNested', DiscoverScreen);

export const TabNavigator: React.FC = () => {
    const insets = useSafeAreaInsets();
    const currentTheme: DefaultTheme = useTheme();
    const { t } = useTranslation();

    const tabs: TabsConfig<FlashyTabBarItemConfig> = {
        Cards: {
            icon: {
                component: HomeSVG,
                color: currentTheme.colors.componentLabel,
            },
            labelStyle: {
                color: currentTheme.colors.contrast,
            },
            indicator: {
                visible: false,
            },
        },
        Discover: {
            icon: {
                component: DiscoverSVG,
                color: currentTheme.colors.componentLabel,
            },
            labelStyle: {
                color: currentTheme.colors.contrast,
            },
            indicator: {
                visible: false,
            },
        },
        ChatsList: {
            icon: {
                component: ChatsListSVG,
                color: currentTheme.colors.componentLabel,
            },
            labelStyle: {
                color: currentTheme.colors.contrast,
            },
            indicator: {
                visible: false,
            },
        },
        Profile: {
            icon: {
                component: ProfileSVG,
                color: currentTheme.colors.componentLabel,
            },
            labelStyle: {
                color: currentTheme.colors.contrast,
            },
            indicator: {
                visible: false,
            },
        },
    };
    return (
        <Tab.Navigator
            tabBar={(props: BottomTabBarProps) => (
                <AnimatedTabBar
                    preset="flashy"
                    tabs={tabs}
                    style={{
                        backgroundColor: currentTheme.colors.component,
                        position: 'absolute',
                        borderRadius: currentTheme.borderRadius.medium,
                        bottom: insets.bottom ? insets.bottom : currentTheme.spacer,
                        height: currentTheme.tabBarHeight,
                        width: currentTheme.dimensions.width - 2 * currentTheme.spacer,
                        left: currentTheme.spacer,
                    }}
                    itemInnerSpace={14}
                    itemOuterSpace={8}
                    {...props}
                />
            )}
        >
            <Tab.Screen name={'Cards'} component={Cards} options={{ tabBarLabel: t('tabbar.cards') }} />
            <Tab.Screen name={'Discover'} component={Discover} options={{ tabBarLabel: t('tabbar.discover') }} />
            <Tab.Screen name={'ChatsList'} component={ChatsListScreen} options={{ tabBarLabel: t('tabbar.chats') }} />
            <Tab.Screen name={'Profile'} component={ProfileNavigator} options={{ tabBarLabel: t('tabbar.profile') }} />
        </Tab.Navigator>
    );
};
