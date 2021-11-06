import React, { PropsWithChildren } from "react";
import { TextWrapperStyled } from "./styled/text-wrapper.styled"
type TextWrapperProps = PropsWithChildren<{
    scale: number;
}>;

export const TextWrapper: React.FC<TextWrapperProps> = (props: TextWrapperProps) => {
    return (
        <TextWrapperStyled scale={props.scale}>
            {props.children}
        </TextWrapperStyled>
    );
};              