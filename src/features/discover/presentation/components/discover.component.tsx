import React, { useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { Card } from '../../../../core/presentation/components/card/card.component';
import { FooterView } from '../../../../core/presentation/components/container/footer-view.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { GET_MATCHES } from '../../data/store/discover.actions';
import { getIsMatchesLoading, getSavedMatches } from '../../data/store/discover.selectors';
import { DiscoverScreenNavigationProp } from '../navigation/routing.types';

import { DiscoverView } from './discover-view.styled';
import { EmptyListWrapper, NoMatchesText, StyledActivityIndicator } from './styled/discover.styled';

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
};

export const DiscoverScreen: React.FC<DiscoverScreenProps> = () => {
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsMatchesLoading);
    const matches = useSelector(getSavedMatches);
    const { t } = useTranslation();

    const getMatches = useCallback(() => {
        dispatch(GET_MATCHES.TRIGGER());
    }, [dispatch]);

    useEffect(() => {
        getMatches();
    }, [getMatches]);

    return (
        <SafeArea edges={['top']}>
            <FlatList
                data={matches ?? []}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                onRefresh={getMatches}
                refreshing={isLoading}
                contentContainerStyle={{ flexGrow: 1 }}
                ListFooterComponent={<FooterView insets={insets} />}
                ListEmptyComponent={
                    <EmptyListWrapper>
                        {isLoading && !matches ? (
                            <StyledActivityIndicator />
                        ) : (
                            <NoMatchesText>{t('discover.noMatches')}</NoMatchesText>
                        )}
                    </EmptyListWrapper>
                }
                renderItem={({ item }) => (
                    <DiscoverView insets={insets}>
                        <Card user={item} scale={1} />
                    </DiscoverView>
                )}
            />
        </SafeArea>
    );
};
