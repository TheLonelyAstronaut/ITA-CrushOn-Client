import React, { useCallback } from 'react';
import { View, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Card } from '../../../../core/presentation/components/card/card.component';
import { Swipeable } from '../../../../core/presentation/components/swipes/swipeable.component';
import { CardsData } from '../../../../mocks/cards.data';
import { CardsScreenNavigationProp } from '../navigation/routing.types';
import { CardsView } from './styled/cards-view.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';

export type CardsScreenProps = {
    navigation: CardsScreenNavigationProp;
};

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    const insets = useSafeAreaInsets();

    const expandCard = useCallback(
        (id: number) => {
            props.navigation.navigate('ExpandedCard', {
                id,
            });
        },
        [props]
    );

    return (
        <SafeArea>
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
                CellRendererComponent={({ item, index, children, style, ...props }) => {
                    return (
                        <View
                            style={{
                                ...style,
                                zIndex: CardsData.length - index,
                                position: 'absolute',
                            }}
                            {...props}
                        >
                            {children}
                        </View>
                    );
                }}
                renderItem={({ item }) => (
                    <CardsView insets={insets}>
                        <Swipeable>
                            <Card user={item} expandCard={expandCard} scale={1.7} />
                        </Swipeable>
                    </CardsView>
                )}
            />
        </SafeArea>
    );
};
