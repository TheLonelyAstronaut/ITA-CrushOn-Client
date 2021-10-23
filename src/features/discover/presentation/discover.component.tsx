import React from "react";
import {Text, Button} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DiscoverScreenNavigationProp } from "./navigation/routing.types";

export type DiscoverScreenProps = {
    navigation: DiscoverScreenNavigationProp;
}

export const DiscoverScreen: React.FC<DiscoverScreenProps> = (props: DiscoverScreenProps) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={{
                justifyContent:"center", alignItems:"center"
            }}>
                Discover
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