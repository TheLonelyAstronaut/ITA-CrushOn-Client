import React, { useCallback } from 'react';
import { View, FlatList, StatusBar, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultTheme, useTheme } from 'styled-components/native';

import { Card } from '../../../../core/presentation/components/card/card.component';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { Swipeable } from '../../../../core/presentation/components/swipes/swipeable.component';
import { CardsData } from '../../../../mocks/cards.data';
import { CardsScreenNavigationProp } from '../navigation/routing.types';

import { CardsView } from './styled/cards-view.styled';

export type CardsScreenProps = {
    navigation: CardsScreenNavigationProp;
};

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    const insets = useSafeAreaInsets();
    const currentTheme: DefaultTheme = useTheme();

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
            <StatusBar
                barStyle={currentTheme.colors.statusBar as StatusBarStyle}
                backgroundColor={currentTheme.colors.background}
            />
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                scrollEnabled={false}
                contentContainerStyle={{ flexGrow: 1 }}
                removeClippedSubviews={false} //added to fix android view trouble
                CellRendererComponent={({ item, index, children, style, ...props }) => {
                    return (
                        <View
                            style={{
                                ...style,
                                zIndex: CardsData.length - index + 1, //+1 added to fix android view trouble
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
