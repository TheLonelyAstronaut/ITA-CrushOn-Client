import React, { useCallback } from "react";
import {Text, Button, useWindowDimensions, View, FlatList} from "react-native";
import { Edge, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "../../../core/presentation/components/card.component";
import { Swipeable } from "../../../core/presentation/components/swipeable.component";
import { CardsData } from "../../../mocks/cards.data";
import { DiscoverScreenNavigationProp } from "./navigation/routing.types";

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (props: DiscoverScreenProps) => {
    const dimensions = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const getCardHeight = useCallback((): number => {
        return (
            (dimensions.height - 
            insets.top -
            insets.bottom - 
            65) / // TAB BAR HEIGHT, MOVE TO THEME 
            2 
        );
    }, [dimensions, insets]);
    
    const edges: Edge[] = [];
    edges.push('top');

    const expandCard = useCallback((id: number) => {
        props.navigation.navigate('ExpandedCard', {
            id
        });
    }, [props]);
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}} edges={edges}>
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={<View style={{height: 70 + insets.bottom}}/>}
                renderItem={({ item }) => (
                    <View style={{
                        margin: 5,
                        height: getCardHeight(),
                        width: dimensions.width/2-10,
                    }}>
                        <Swipeable>
                            <Card user={item} expandCard={expandCard} scale={1}/>
                        </Swipeable>
                    </View>
                )}
            />
        </SafeAreaView>
    )
};