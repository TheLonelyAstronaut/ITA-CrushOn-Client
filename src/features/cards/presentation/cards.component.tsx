import React from "react";
import {Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CardsScreenNavigationProp } from "./navigation/routing.types";

export type CardsScreenProps = {
    navigation: CardsScreenNavigationProp;
}

export const CardsScreen: React.FC<CardsScreenProps> = (props: CardsScreenProps) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={{
                justifyContent:"center", alignItems:"center"
            }}>
                Cards
            </Text>
            <Button 
                title="expand" 
                onPress={()=>{
                    props.navigation.navigate('ExpandedCard', {
                        id: 123
                    })
                }}
            />
        </SafeAreaView>
    )
};