import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { ProfileNavigatorParamList } from '../../../../core/presentation/navigation/profile/routing-types';
import { TabNavigatorParamList } from '../../../../core/presentation/navigation/tab/routing.types';

export type ProfileScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabNavigatorParamList, 'Profile'>,
    StackNavigationProp<ProfileNavigatorParamList, 'ProfileInfo'>
>;

export type EditProfileScreenNavigationProp = StackNavigationProp<ProfileNavigatorParamList, 'EditProfile'>;

export type PassionsScreenNavigationProp = StackNavigationProp<ProfileNavigatorParamList, 'Passions'>;