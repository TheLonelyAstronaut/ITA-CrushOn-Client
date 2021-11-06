import React, { useCallback } from "react";
import { FlatList} from "react-native";
import { Edge, useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "../../../core/presentation/components/card/card.component";
import { Swipeable } from "../../../core/presentation/components/swipes/swipeable.component";
import { SafeAreaThemed } from "../../../core/presentation/themes/styled/safe-area-themed.styled";
import { CardsData } from "../../../mocks/cards.data";
import { DiscoverView } from "./components/discover-view.component";
import { Footer } from "./components/footer-view.component";
import { DiscoverScreenNavigationProp } from "./navigation/routing.types";

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (props: DiscoverScreenProps) => {
    const insets = useSafeAreaInsets();

    const expandCard = useCallback((id: number) => {
        props.navigation.navigate('ExpandedCard', {
            id
        });
    }, [props]);
    
    return (
        <SafeAreaThemed edges={['top']}>
            <FlatList
                data={CardsData}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                ListFooterComponent={<Footer insets={insets}/>}
                renderItem={({ item }) => (
                    <DiscoverView insets={insets}>
                        <Swipeable>
                            <Card user={item} expandCard={expandCard} scale={1}/>
                        </Swipeable>
                    </DiscoverView>
                )}
            />
        </SafeAreaThemed>
    )
};