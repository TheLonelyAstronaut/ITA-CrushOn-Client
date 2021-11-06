import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AuthenticationParamList } from '../../../../core/presentation/navigation/authentication/routing.types';
import { RootNavigatorParamList } from '../../../../core/presentation/navigation/root/routing.types';


export type RegistrationScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<RootNavigatorParamList, "Auth">,
    StackNavigationProp<AuthenticationParamList, "Registration">
>;

