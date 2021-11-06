import React from "react";
import {SafeAreaView, Text, Button} from "react-native";
import { RegistrationScreenNavigationProp } from "./navigation/routing.types";

export type RegistrationScreenProps = {
    navigation: RegistrationScreenNavigationProp;
}

export const RegistrationScreen: React.FC<RegistrationScreenProps> = (props: RegistrationScreenProps) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={{
                justifyContent:"center", alignItems:"center"
            }}>
                Register screen
            </Text>
            {/* <Button 
                title="sign up" 
                onPress={()=>{
                    props.navigation.navigate('Tabs')
                }}
            /> */}
            <Button 
                title="sign up" 
                onPress={()=>{}}
            />
        </SafeAreaView>
    )
};