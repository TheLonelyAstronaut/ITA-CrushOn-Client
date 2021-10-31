import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorParamList } from "../../../core/presentation/navigation/tab/routing.types";
import { DiscoverScreen } from "../../../features/discover/presentation/discover.component";
import { CardsScreen } from "../../../features/cards/presentation/cards.component";
import { ChatsListScreen } from "../../../features/chats-list/presentation/chats-list.component";
import { ProfileScreen } from "../../../features/profile/presentation/profile.component";
import AnimatedTabBar, { FlashyTabBarItemConfig, TabsConfig } from "@gorhom/animated-tabbar";
import { HomeSVG } from "../../../assets/components/cards-icon.component";
import { DiscoverSVG } from "../../../assets/components/discover-icon.component";
import { ChatsListSVG } from "../../../assets/components/chats-list-icon.component";
import { ProfileSVG } from "../../../assets/components/profile-icon.component";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const tabs: TabsConfig<FlashyTabBarItemConfig> = {
    Cards: {
        icon: {
            component: HomeSVG,
            color: '#53377A'
        },
        labelStyle: {
            color: '#A100F2'
        },
        indicator: {
            visible: false
        }
    },
    Discover: {
        icon: {
            component: DiscoverSVG,
            color: '#53377A'
        },
        labelStyle: {
            color: '#A100F2'
        },
        indicator: {
            visible: false
        }
    },
    ChatsList: {
        icon: {
            component: ChatsListSVG,
            color: '#53377A'
        },
        labelStyle: {
            color: '#A100F2'
        },
        indicator: {
            visible: false
        }
    },
    Profile: {
        icon: {
            component: ProfileSVG,
            color: '#53377A'
        },
        labelStyle: {
            color: '#A100F2'
        },
        indicator: {
            visible: false
        }
    }
}

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNaviagtor = () => {
    const insets = useSafeAreaInsets();

    return (
        <Tab.Navigator
            tabBar={props => (
                <AnimatedTabBar
                    preset='flashy'
                    tabs={tabs}
                    style={{
                        backgroundColor:'#DFE6FA',
                        position: 'absolute',
                        borderRadius: 15,
                        bottom: insets.bottom ? insets.bottom : 5,
                        height: 65,
                        width: Dimensions.get('window').width*0.95,
                        left: Dimensions.get('window').width*0.025,
                    }}
                    itemInnerSpace={15}
                    itemOuterSpace={8}
                    {...props}
                />    
            )}
        >
            <Tab.Screen name={'Cards'} component={CardsScreen}/>
            <Tab.Screen name={'Discover'} component={DiscoverScreen}/>
            <Tab.Screen name={'ChatsList'} component={ChatsListScreen}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}