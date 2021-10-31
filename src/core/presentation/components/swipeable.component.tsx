import React, { PropsWithChildren } from "react";
import { View } from "react-native";

export type SwipeableProps = PropsWithChildren<{

}>;

export const Swipeable: React.FC<SwipeableProps> = (props: SwipeableProps) => {
    return (
        <View style={{ flex: 1 }}>
            {props.children}
        </View>
    )
};