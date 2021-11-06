import React, { PropsWithChildren } from "react";
import { TextThemedStyled } from "./styled/text-themed.styled";
import { TextType } from "./types";

type TextThemedProps = PropsWithChildren<{
    type: TextType;
}>;

export const TextThemed: React.FC<TextThemedProps> = (props: TextThemedProps) => {
    return (
        <TextThemedStyled type={props.type}>
            {props.children}
        </TextThemedStyled> 
    );
};