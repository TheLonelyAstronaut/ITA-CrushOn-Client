import React from 'react';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ChatsListScreenNavigationProp } from '../navigation/routing.types';

export type ChatsListScreenProps = {
    navigation: ChatsListScreenNavigationProp;
};

export const ChatsListScreen: React.FC<ChatsListScreenProps> = (props: ChatsListScreenProps) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Text
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                Chats here
            </Text>
            <Button
                title="go to specific chat"
                onPress={() => {
                    props.navigation.navigate('Chat', {
                        id: 123,
                    });
                }}
            />
        </SafeAreaView>
    );
};
