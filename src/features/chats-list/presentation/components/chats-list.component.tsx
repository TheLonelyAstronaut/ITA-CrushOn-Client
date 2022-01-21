import React from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { FooterView } from '../../../../core/presentation/components/container/footer-view.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { CardsData } from '../../../../mocks/cards.data';
import { ChatsListScreenNavigationProp } from '../navigation/routing.types';

import { ChatsItem } from './chats-item.component';

export type ChatsListScreenProps = {
    navigation: ChatsListScreenNavigationProp;
};

export const ChatsListScreen: React.FC<ChatsListScreenProps> = (props: ChatsListScreenProps) => {
    const insets = useSafeAreaInsets();

    return (
        <SafeArea edges={['top']}>
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<FooterView insets={insets} />}
                renderItem={({ item }) => <ChatsItem user={item} />}
            />
        </SafeArea>
    );
};
