import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme, useTheme } from 'styled-components/native';

import { Reaction } from '../../../../core/model/explore.model';
import { User } from '../../../../core/model/user.model';
import { Card } from '../../../../core/presentation/components/card/card.component';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { CardsData } from '../../../../mocks/cards.data';
import { GET_CARDS, SET_REACTION } from '../../data/store/cards.actions';
import { getCards } from '../../data/store/cards.selectors';
import { CardsScreenNavigationProp, CardsScreenRouteProp } from '../navigation/routing.types';

import { CardsView } from './styled/cards-view.styled';

export type CardsScreenProps = {
    route: CardsScreenRouteProp;
    navigation: CardsScreenNavigationProp;
};

const CustomShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    const insets = useSafeAreaInsets();
    const cardsData = useSelector(getCards);
    const [list, setList] = useState<User[]>(CardsData);
    const theme: DefaultTheme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_CARDS.STARTED());
    }, [dispatch]);

    const setReaction = useCallback(( userId: number, reaction: Reaction) => {
        dispatch(SET_REACTION.STARTED({userId: userId, reaction: reaction}));
        list.shift();

        setList([...list]);
    }, [dispatch, list]);

    return (
        <SafeArea>
            <StatusBar
                barStyle={theme.colors.statusBar as StatusBarStyle}
                backgroundColor={theme.colors.background}
            />
            <CardsView zIndex={1} insets={insets}>
                <CustomShimmerPlaceholder
                    style={{
                        borderRadius: 30,
                        width: '100%',
                        height: '100%'
                    }}
                />
            </CardsView>
            {list
                .filter((_, index) => index < 2)
                .map((user, index) => {
                    return (
                        <CardsView zIndex={9999 - index} key={user.id} insets={insets}>
                            <Card user={user} scale={1.7} handleReaction={setReaction} />
                        </CardsView>
                    );
                })}
        </SafeArea>
    );
};
