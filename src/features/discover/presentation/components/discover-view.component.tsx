import React, { PropsWithChildren } from "react";
import { DiscoverViewStyled } from "./styled/discover-view.styled";

type DiscoverViewProps = PropsWithChildren<{
    insets: {
        top: number,
        bottom: number,
    }
}>;

export const DiscoverView: React.FC<DiscoverViewProps> = (props: DiscoverViewProps) => {
    return (
        <DiscoverViewStyled insets={props.insets}>
            {props.children}
        </DiscoverViewStyled>
    );
};
