import React, { PropsWithChildren } from "react";
import { FooterStyled } from "./styled/footer-view.styled";

type FooterProps = PropsWithChildren<{
    insets: {
        bottom: number,
    }
}>;

export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
    return (
        <FooterStyled insets={props.insets}>
            {props.children}
        </FooterStyled>
    );
};