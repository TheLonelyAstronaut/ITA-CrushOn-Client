import { useFocusEffect } from '@react-navigation/native';
import React, { MutableRefObject, useCallback, useRef, useState } from 'react';
import { View, FlatList, StatusBar } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { User } from '../../../core/model/user.model';
import { Card } from '../../../core/presentation/components/card/card.component';
import { SafeAreaThemed } from '../../../core/presentation/components/container/safe-area-themed.styled';
import { Swipeable } from '../../../core/presentation/components/swipes/swipeable.component';
import { CardsData } from '../../../mocks/cards.data';

import { CardsView } from './components/styled/cards-view.styled';
import { CardsScreenNavigationProp, CardsScreenRouteProp } from './navigation/routing.types';

export type CardsScreenProps = {
    route: CardsScreenRouteProp;
    navigation: CardsScreenNavigationProp;
};

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    const insets = useSafeAreaInsets();
    const [list, setList] = useState(CardsData);

    useFocusEffect(
        useCallback(() => {
            console.log('HERE', props.route.params?.reaction);
        }, [props.route])
    );

    const setReaction = useCallback(() => {
        list.shift();
        setList([...list]);
    }, [list]);

    return (
        <SafeAreaThemed>
            {list
                .filter((_, index) => index < 2)
                .map((user, index) => {
                    return (
                        <CardsView zIndex={9999 - user.id} key={user.id} insets={insets}>
                            <Card user={user} scale={1.7} handleReaction={setReaction} />
                        </CardsView>
                    );
                })}
        </SafeAreaThemed>
    );
};
