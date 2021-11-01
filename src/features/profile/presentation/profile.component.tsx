import React from "react";
import { ImageBackground, Pressable, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { EditSVG } from "../../../assets/components/edit-icon.component";
import { LocationSVG } from "../../../assets/components/location-icon.component";
import { LogOutSVG } from "../../../assets/components/log-out-icon.component";
import { ProfileScreenNavigationProp } from "./navigation/routing.types";
import { Palette } from "../../../core/presentation/theme/palette.theme";

export type ProfileScreenProps = {
    navigation: ProfileScreenNavigationProp;
}

export const LogOut = () => {};

export const ProfileScreen: React.FC<ProfileScreenProps> = (props: ProfileScreenProps) => {
    const insets = useSafeAreaInsets();

    const user={
        name: 'Liu',
        age: 23,
        lives: 'London',
        passions: ['Singing','Sport','Music','Spirituality','Movies'],
        bio: `Hi, I’m Dan. I'm looking for someone who will go to the cinema with me. Message me if you like Marvel.`
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: '#ffffff'}}>
            <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                    <Pressable style={{marginTop:10, marginRight: 20}} onPress={LogOut}>
                        <LogOutSVG color='#53377A' size={24}/>
                    </Pressable>
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
                    <ImageBackground 
                        source={{uri: 'https://yt3.ggpht.com/YXesX1-BuQmClDrybWgDnTthrtdD5BjkniOC83HXZZgNBNMNbv1jF50su3DIHrNaLTWWxPBxag=s900-c-k-c0x00ffffff-no-rj'}}
                        style={{width: 200, height: 200}}
                        borderRadius={100}
                    />
                </View>
                <View style={{alignItems: 'center', justifyContent: 'center', paddingTop: 30}}>
                    <Pressable style={{flexDirection:'row', alignItems: 'center', backgroundColor: '#DFE6FA', padding: 5, borderRadius: 10}}>
                            <EditSVG color='#53377A' size={16}/>
                            <Text style={{paddingLeft: 2, fontSize: 16, color: '#53377A'}}>Edit Profile</Text>
                    </Pressable>
                </View>
                <View style={{paddingHorizontal: 20}}>
                    <View style={{paddingTop: 40}}>
                        <Text style={{color: 'black', fontSize: 28, fontWeight: 'bold' }}>{user.name},{user.age}</Text>
                        <View style={{flexDirection:'row', alignItems: 'center'}}>
                            <Text style={{color: 'black', fontSize: 18, paddingRight: 5}}>Live in {user.lives}</Text>
                            <LocationSVG color='#53377A' size={14} strokeWidth={2}/>
                        </View>
                    </View>
                    <Text style={{paddingTop: 15, fontSize: 20, fontWeight: 'bold'}}>Intrested</Text>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {
                        user.passions.map((item)=>{
                            let n=Math.floor(Math.random()*10);
                            let boxColor=Palette[n].color;
                            let labelColor=Palette[n].labelColor;
                            return (
                                <View style={{marginVertical: 4, marginRight: 10, alignItems: 'center', backgroundColor: boxColor, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10}}>
                                    <Text style={{paddingLeft: 2, fontSize: 16, color: labelColor}}>{item}</Text>
                                </View>
                            )
                        })
                    }
                    </View>
                    <Text style={{paddingTop: 15, fontSize: 20, fontWeight: 'bold'}}>About</Text>
                    <Text style={{fontSize: 16}}>{user.bio}</Text>
                </View>
                <View style={{height:70 + insets.bottom}}/>
            </ScrollView>
        </SafeAreaView>
    )
};