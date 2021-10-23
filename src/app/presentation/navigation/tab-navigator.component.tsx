import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabNavigatorParamList } from "../../../core/presentation/navigation/tab/routing.types";
import { DiscoverScreen } from "../../../features/discover/presentation/discover.component";
import { CardsScreen } from "../../../features/cards/presentation/cards.component";
import { ChatsListScreen } from "../../../features/chats-list/presentation/chats-list.component";
import { ProfileScreen } from "../../../features/profile/presentation/profile.component";

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

export const TabNaviagtor = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name={'Cards'} component={CardsScreen}/>
            <Tab.Screen name={'Discover'} component={DiscoverScreen}/>
            <Tab.Screen name={'ChatsList'} component={ChatsListScreen}/>
            <Tab.Screen name={'Profile'} component={ProfileScreen}/>
        </Tab.Navigator>
    )
}