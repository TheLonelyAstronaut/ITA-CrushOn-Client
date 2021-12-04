import React from "react";
import { Pressable } from "react-native";

import { SelectableText } from "./styled/selectable-text.styled";

export type selectableTextedButtonProps = {
    selected: boolean;
    onPress: () => void;
    text: string;
};

export const SelectableTextedButton: React.FC<selectableTextedButtonProps> = (props: selectableTextedButtonProps) => {
    return (
        <Pressable onPress={props.onPress} disabled={props.selected ? true : false}>
            <SelectableText selected={props.selected}>
                {props.text}
            </SelectableText>
        </Pressable>
    );
};