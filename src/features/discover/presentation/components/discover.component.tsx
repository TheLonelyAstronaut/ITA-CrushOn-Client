import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '../../../../core/presentation/components/card/card.component';
import { FooterView } from '../../../../core/presentation/components/container/footer-view.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { Swipeable } from '../../../../core/presentation/components/swipes/swipeable.component';
import { CardsData } from '../../../../mocks/cards.data';
import { DiscoverScreenNavigationProp } from '../navigation/routing.types';

import { DiscoverView } from './discover-view.styled';

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
};

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (props: DiscoverScreenProps) => {
    const insets = useSafeAreaInsets();

    const expandCard = useCallback(
        (id: number) => {
            props.navigation.navigate('ExpandedCard', { id });
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
