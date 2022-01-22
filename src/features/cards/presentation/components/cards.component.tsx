import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { StatusBar, StatusBarStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';
import { useDispatch, useSelector } from 'react-redux';
import { DefaultTheme, useTheme } from 'styled-components/native';

import { Reaction } from '../../../../core/model/explore.model';
import { Card } from '../../../../core/presentation/components/card/card.component';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { GET_CARDS, SET_REACTION } from '../../data/store/cards.actions';
import { getCards, getIsCardsLoading } from '../../data/store/cards.selectors';
import { CardsScreenNavigationProp, CardsScreenRouteProp } from '../navigation/routing.types';

import { CardsView } from './styled/cards-view.styled';
import { NoResultsText, NoResultsWrapper } from './styled/no-results.styled';

export type CardsScreenProps = {
    route: CardsScreenRouteProp;
    navigation: CardsScreenNavigationProp;
};

const CustomShimmerPlaceholder = createShimmerPlaceholder(LinearGradient);

export const CardsScreen: React.FC<CardsScreenProps> = () => {
    const insets = useSafeAreaInsets();
    const cardsData = useSelector(getCards);
    const isLoading = useSelector(getIsCardsLoading);
    const { t } = useTranslation();
    const theme: DefaultTheme = useTheme();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(GET_CARDS.TRIGGER());
    }, [dispatch]);

    const setReaction = useCallback(
        (userId: number, reaction: Reaction) => {
            dispatch(SET_REACTION.STARTED({ userId: userId, reaction: reaction }));
        },
        [dispatch]
    );

    return (
        <SafeArea>
            <StatusBar barStyle={theme.colors.statusBar as StatusBarStyle} backgroundColor={theme.colors.background} />
            <CardsView zIndex={1} insets={insets}>
                {isLoading ? (
                    <CustomShimmerPlaceholder
                        style={{
                            borderRadius: 30,
                            width: '100%',
                            height: '100%',
                        }}
                    />
                ) : (
                    cardsData?.length < 2 && (
                        <NoResultsWrapper>
                            <NoResultsText>{t('card.noResults')}</NoResultsText>
                        </NoResultsWrapper>
                    )
                )}
            </CardsView>
            {cardsData &&
                cardsData
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
