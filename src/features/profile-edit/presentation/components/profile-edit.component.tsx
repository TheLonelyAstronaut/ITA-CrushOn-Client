import React from 'react';
import { View } from 'react-native';
import { ProfileEditScreenNavigationProp } from '../navigation/routing.types';

export type ProfileEditScreenProps = {
    navigation: ProfileEditScreenNavigationProp;
};

export const ProfileEditScreen: React.FC<ProfileEditScreenProps> = (props: ProfileEditScreenProps) => {
    return <View style={{ flex: 1, backgroundColor: 'gray' }} />;
};
