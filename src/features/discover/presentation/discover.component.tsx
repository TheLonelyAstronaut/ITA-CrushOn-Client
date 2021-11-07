import React, { useCallback } from 'react';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Card } from '../../../core/presentation/components/card/card.component';
import { SafeAreaThemed } from '../../../core/presentation/components/container/safe-area-themed.styled';
import { Swipeable } from '../../../core/presentation/components/swipes/swipeable.component';
import { CardsData } from '../../../mocks/cards.data';

import { DiscoverView } from './components/discover-view.styled';
import { FooterView } from './components/footer-view.styled';
import { DiscoverScreenNavigationProp } from './navigation/routing.types';
import { User } from '../../../core/model/user.model';

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
};

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (props: DiscoverScreenProps) => {
    const insets = useSafeAreaInsets();

    const expandCard = useCallback(
        (user: User) => {
            props.navigation.navigate('ExpandedCard', {
                user: user,
            });
        },
        [props]
    );

    return (
        <SafeAreaThemed edges={['top']}>
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={<FooterView insets={insets} />}
                renderItem={({ item }) => (
                    <DiscoverView insets={insets}>
                        <Card user={item} expandCard={expandCard} scale={1} />
                    </DiscoverView>
                )}
            />
        </SafeAreaThemed>
    );
};
