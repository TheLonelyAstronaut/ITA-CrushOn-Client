import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabNavigatorParamList } from '../../../core/presentation/navigation/tab/routing.types';
import { DiscoverScreen } from '../../../features/discover/presentation/components/discover.component';
import { CardsScreen } from '../../../features/cards/presentation/components/cards.component';
import { ChatsListScreen } from '../../../features/chats-list/presentation/components/chats-list.component';
import { ProfileScreen } from '../../../features/profile/presentation/components/profile.component';
import AnimatedTabBar, { FlashyTabBarItemConfig, TabsConfig } from '@gorhom/animated-tabbar';
import { HomeSVG } from '../../../assets/components/cards-icon.component';
import { DiscoverSVG } from '../../../assets/components/discover-icon.component';
import { ChatsListSVG } from '../../../assets/components/chats-list-icon.component';
import { ProfileSVG } from '../../../assets/components/profile-icon.component';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultTheme, useTheme } from 'styled-components';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs/src/types';

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNaviagtor = () => {
    const insets = useSafeAreaInsets();
    const currentTheme: DefaultTheme = useTheme();
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
            <Tab.Screen name={'Cards'} component={CardsScreen} />
            <Tab.Screen name={'Discover'} component={DiscoverScreen} />
            <Tab.Screen name={'ChatsList'} component={ChatsListScreen} />
            <Tab.Screen name={'Profile'} component={ProfileScreen} />
        </Tab.Navigator>
    );
};
