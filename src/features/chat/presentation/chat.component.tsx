import React from 'react';
import { View } from 'react-native';
import { ChatScreenNavigationProp, ChatScreenRouteProp } from './navigation/routing.types';

export type ChatScreenProps = {
    navigation: ChatScreenNavigationProp;
    route: ChatScreenRouteProp;
};

export const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    return <View style={{ flex: 1, backgroundColor: 'pink' }} />;
};
