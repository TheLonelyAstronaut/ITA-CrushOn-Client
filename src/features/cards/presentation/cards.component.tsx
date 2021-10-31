import React, { useCallback } from "react";
import { View, FlatList, useWindowDimensions} from "react-native";
import { Edge, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { Card } from "../../../core/presentation/components/card.component";
import { Swipeable } from "../../../core/presentation/components/swipeable.component";
import { CardsData } from "../../../mocks/cards.data";
import { CardsScreenNavigationProp } from "./navigation/routing.types";

export type CardsScreenProps = {
    navigation: CardsScreenNavigationProp;
}

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    const dimensions = useWindowDimensions();
    const insets = useSafeAreaInsets();
    const edges: Edge[] = ['top', 'bottom'];

    const getCardHeight = useCallback((): number => {
        return (
            dimensions.height - 
            insets.top -
            insets.bottom -
            65 // TAB BAR HEIGHT, MOVE TO THEME 
        );
    }, [dimensions, insets]);

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
                scrollEnabled={false}
                CellRendererComponent={({
                    item,
                    index,
                    children,
                    style,
                    ...props
                }) => {
                    return (
                        <View 
                            style={{ 
                                ...style, 
                                zIndex: CardsData.length - index, 
                                position: 'absolute' 
                            }}
                            {...props} 
                        >
                            {children}
                        </View>
                    )
                }}
                renderItem={({ item }) => (
                    <View style={{
                        padding: 10,
                        height: getCardHeight(),
                        width: dimensions.width,
                    }}>
                        <Swipeable>
                            <Card user={item} expandCard={expandCard} scale={1.7}/>
                        </Swipeable>
                    </View>
                )}
            />    
        </SafeAreaView>
    )
};