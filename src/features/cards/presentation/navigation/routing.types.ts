import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigatorParamList } from '../../../../core/presentation/navigation/root/routing.types';
import { TabNavigatorParamList } from '../../../../core/presentation/navigation/tab/routing.types';
import { RouteProp } from '@react-navigation/native';

export type CardsScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootNavigatorParamList, 'Tabs'>,
    BottomTabNavigationProp<TabNavigatorParamList, 'Cards'>
>;

export type CardsScreenRouteProp = RouteProp<TabNavigatorParamList, 'Cards'>;
