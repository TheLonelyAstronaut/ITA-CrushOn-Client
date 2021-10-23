import React from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileScreenNavigationProp } from "./navigation/routing.types";

export type ProfileScreenProps = {
    navigation: ProfileScreenNavigationProp;
}

export const ProfileScreen: React.FC<ProfileScreenProps> = (props: ProfileScreenProps) => {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Text style={{
                justifyContent:"center", alignItems:"center"
            }}>
                Profile
            </Text>
            <Button 
                title="edit profile" 
                onPress={()=>{
                    props.navigation.navigate('ProfileEdit')
                }}
            />
        </SafeAreaView>
    )
};