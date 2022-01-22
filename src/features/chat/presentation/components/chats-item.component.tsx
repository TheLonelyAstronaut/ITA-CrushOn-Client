/* eslint-disable react-native/no-color-literals */
import { Query } from '@nozbe/watermelondb';
import withObservables from '@nozbe/with-observables';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useMemo } from 'react';
import { View } from 'react-native';

import { Avatar } from '../../../../core/presentation/components/container/avatar.styled';
import { Chat } from '../../data/database/model/chat.model';
import { Message } from '../../data/database/model/message.model';
import { User } from '../../data/database/model/user.model';
import { useDatabaseItem } from '../../util/use-database-item.util';
import { ChatsListScreenNavigationProp } from '../navigation/routing.types';

import { Date as DateComponent } from './styled/chats-item-last-date.styled';
import { LastMessage } from './styled/chats-item-last-message.styled';
import { Name } from './styled/chats-item-name.styled';
import { ChatsItemView } from './styled/chats-item-view.styled';

export type ChatsItemProps = {
    chat: Chat;
};

export const RawChatsItem: React.FC<ChatsItemProps> = (props: ChatsItemProps) => {
    const navigation = useNavigation() as ChatsListScreenNavigationProp;
    const user = useDatabaseItem<User>(props.chat.firstUser);
    const messages = useDatabaseItem<Message, Query<Message>>(props.chat.messages);
    const date = useMemo(() => {
        if(!messages || messages?.length == 0) return '';

        const date = new Date(messages[0].sentAt)

        return `${date.getHours()}:${date.getMinutes()}`
    }, [messages]);

    const openChat = useCallback(() => {
        navigation.navigate('Chat', {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            screen: 'ChatNested',
            params: {
                user: user,
                //chatId: props.
            },
        });
    }, [navigation, user]);

    if(!user || !messages || messages?.length == 0) {
        console.log('BRUH')
        return null;
    }

    return (
        <ChatsItemView onPress={openChat}>
            <Avatar source={{ uri: user.photo }} />
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <Name>{user.name}</Name>
                <LastMessage numberOfLines={2} ellipsizeMode={'tail'}>
                    {messages[0].text}
                </LastMessage>
            </View>
            <DateComponent>
                {date}
            </DateComponent>
        </ChatsItemView>
    );
};

export const ChatsItem = withObservables([Chat.table], ({ chat }) => ({
    chat: chat.observe(),
}))(RawChatsItem);
