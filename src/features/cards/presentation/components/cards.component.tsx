import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { DefaultTheme, useTheme } from 'styled-components/native';

import { Card } from '../../../../core/presentation/components/card/card.component';
import { CardsData } from '../../../../mocks/cards.data';
import {CardsScreenNavigationProp, CardsScreenRouteProp} from '../navigation/routing.types';

import { CardsView } from './styled/cards-view.styled';

import {User} from "../../../../core/model/user.model";

import { SafeArea} from "../../../../core/presentation/components/container/safe-area-themed.styled";

export type CardsScreenProps = {
    route: CardsScreenRouteProp;
    navigation: CardsScreenNavigationProp;
};

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    const insets = useSafeAreaInsets();
    const [list, setList] = useState<User[]>(CardsData);
    const currentTheme: DefaultTheme = useTheme();

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
        <SafeArea>
            <StatusBar
                barStyle={currentTheme.colors.statusBar as StatusBarStyle}
                backgroundColor={currentTheme.colors.background}
            />
            {list
                .filter((_, index) => index < 2)
                .map((user, index) => {
                    return (
                        <CardsView zIndex={9999 - user.id} key={user.id} insets={insets}>
                            <Card user={user} scale={1.7} handleReaction={setReaction} />
                        </CardsView>
                    );
                })}
        </SafeArea>
    );
};
