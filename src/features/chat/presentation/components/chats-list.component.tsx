import withObservables from '@nozbe/with-observables'
import React, { useCallback, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { FooterView } from '../../../../core/presentation/components/container/footer-view.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { CardsData } from '../../../../mocks/cards.data';
import { Chat } from '../../data/database/model/chat.model';
import { database } from '../../data/database/watermelon.database';
import { GET_CHATS } from '../../data/store/chat.actions';
import { getChatIsLoading } from '../../data/store/chat.selectors';
import { ChatsListScreenNavigationProp } from '../navigation/routing.types';

import { ChatsItem } from './chats-item.component';

//database.clearDatabase()

export type ChatsListScreenProps = {
    chats: Chat[];
    navigation: ChatsListScreenNavigationProp;
};

database.clearDatabase()

export const PureChatsListScreen: React.FC<ChatsListScreenProps> = (props: ChatsListScreenProps) => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const isLoading = useSelector(getChatIsLoading);

    const getChats = useCallback(() => {
        dispatch(GET_CHATS());
    }, [dispatch]);

    useEffect(() => {
        getChats();
    }, [getChats]);

    return (
        <SafeArea edges={['top']}>
            <FlatList
                data={props.chats}
                onRefresh={getChats}
                extraData={props.chats}
                refreshing={isLoading}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<FooterView insets={insets} />}
                renderItem={({ item }) => <ChatsItem chat={item}/>}
            />
        </SafeArea>
    );
};

export const ChatsListScreen = withObservables([Chat.table], () => ({
    chats: database.getAllWithoutFetch<Chat>(Chat.table, []).observe()
}))(PureChatsListScreen);