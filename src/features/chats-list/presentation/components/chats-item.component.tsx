/* eslint-disable react-native/no-color-literals */
import React from 'react';
import { View } from 'react-native';

import { Avatar } from '../../../../core/presentation/components/container/avatar.styled';
import { CardsData } from '../../../../mocks/cards.data';
import { Messages } from '../../../../mocks/messages.data';
import { ChatsListScreenNavigationProp } from '../navigation/routing.types';

import { Date } from './styled/chats-item-last-date.styled';
import { LastMessage } from './styled/chats-item-last-message.styled';
import { Name } from './styled/chats-item-name.styled';
import { ChatsItemView } from './styled/chats-item-view.styled';

export type ChatsItemProps = {
    navigation: ChatsListScreenNavigationProp;
    userId: number;
};

export const ChatsItem: React.FC<ChatsItemProps> = (props: ChatsItemProps) => {
    const user = CardsData.find((user) => {
        if (user.id === props.userId) return true;
    });
    return (
        <ChatsItemView onPress={() => props.navigation.navigate('Chat', { id: props.userId })}>
            <Avatar source={{ uri: user?.imgUrl }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Name>{user?.name}</Name>
                <LastMessage numberOfLines={2} ellipsizeMode={'tail'}>
                    {Messages[0].text}
                </LastMessage>
            </View>
            <Date>
                {Messages[0].createdAt.getHours().toString()}:{Messages[0].createdAt.getMinutes().toString()}
            </Date>
        </ChatsItemView>
    );
};
