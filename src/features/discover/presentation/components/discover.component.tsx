import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '../../../../core/presentation/components/card/card.component';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { Swipeable } from '../../../../core/presentation/components/swipes/swipeable.component';
import { CardsData } from '../../../../mocks/cards.data';

import { DiscoverView } from './discover-view.styled';
import { FooterView } from './footer-view.styled';
import { DiscoverScreenNavigationProp } from '../navigation/routing.types';

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
};

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (props: DiscoverScreenProps) => {
    const insets = useSafeAreaInsets();

    const expandCard = useCallback(
        (id: number) => {
            props.navigation.navigate('ExpandedCard', {id});
        },
        [props]
    );

    return (
        <SafeArea edges={['top']}>
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={<FooterView insets={insets} />}
                renderItem={({ item }) => (
                    <DiscoverView insets={insets}>
                        <Swipeable>
                            <Card user={item} expandCard={expandCard} scale={1} />
                        </Swipeable>
                    </DiscoverView>
                )}
            />
        </SafeArea>
    );
};