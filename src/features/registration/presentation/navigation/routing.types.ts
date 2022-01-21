import { CompositeNavigationProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import { AuthenticationParamList } from '../../../../core/presentation/navigation/authentication/routing.types';
import { RegistationParamList } from '../../../../core/presentation/navigation/registration/routing.types';

export type EmailScreenNavigationProp = CompositeNavigationProp<
    StackNavigationProp<AuthenticationParamList, 'Registration'>,
    StackNavigationProp<RegistationParamList, 'Username'>
>;

export type PasswordScreenNavigationProp = StackNavigationProp<RegistationParamList, 'Password'>;

export type NameScreenNavigationProp = StackNavigationProp<RegistationParamList, 'Name'>;

export type GenderScreenNavigationProp = StackNavigationProp<RegistationParamList, 'Gender'>;

export type BirthdayScreenNavigationProp = StackNavigationProp<RegistationParamList, 'Birthday'>;

export type CityScreenNavigationProp = StackNavigationProp<RegistationParamList, 'City'>;

export type PhotoScreenNavigationProp = StackNavigationProp<RegistationParamList, 'Photo'>;
