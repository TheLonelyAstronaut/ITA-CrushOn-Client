import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootNavigatorParamList } from '../../../../core/presentation/navigation/root/routing.types';

export type ChatScreenNavigationProp = StackNavigationProp<RootNavigatorParamList, 'Chat'>;

export type ChatScreenRouteProp = RouteProp<RootNavigatorParamList, 'Chat'>;
