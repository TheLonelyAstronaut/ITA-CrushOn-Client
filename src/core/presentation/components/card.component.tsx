import React, { useMemo, useState } from "react";
import { ImageBackground, LayoutRectangle, Pressable, Text, View} from "react-native";
import { LocationSVG } from "../../../assets/components/location-icon.component";
import { User } from "../../model/user.model";

export type CardProps = {
    user: User;
    expandCard: (id: number) => void;
    scale: number;
};

export const Card: React.FC<CardProps> = (props: CardProps) => {
    // const [layout, setLayout] = useState<LayoutRectangle | null>();
    // const traslate = useMemo(() => {
    //     if(!layout) return { x: 0, y: 0 }

    //     const originalSize = {
    //         height: layout.height / props.scale,
    //         width: layout.width / props.scale
    //     };

    //     return {
    //         x: (layout.width - originalSize.width) * 2,
    //         y: (layout.height - originalSize.height) / -2
    //     }
    // }, [layout])

    return (
        <ImageBackground 
            source={{
                uri: props.user.imgUrl,
            }} 
            imageStyle={{borderRadius: 15}}
            resizeMode='cover'   
            style={{ flex: 1, justifyContent: 'flex-end', borderRadius: 15}}
        >
            <Pressable onPress={() => props.expandCard(props.user.id)}>
                <View style={{alignSelf: 'flex-start', paddingLeft: 18*props.scale, paddingBottom: 15*props.scale}}>
                    <Text style={{color: 'white', fontSize: 18*props.scale, fontWeight: 'bold' }}>{props.user.name},{props.user.age}</Text>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <LocationSVG color='white' size={14*props.scale} strokeWidth={props.scale}/>
                        <Text style={{color: 'white', fontSize: 12*props.scale, marginLeft: 10}}>{props.user.location} km away</Text>
                    </View>
                </View>
            </Pressable>
        </ImageBackground>
    )
};