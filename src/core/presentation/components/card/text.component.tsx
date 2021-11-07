import React, { PropsWithChildren } from 'react';

import { TextStyle, TextStyled } from './styled/text.styled';

type WhiteTextProps = PropsWithChildren<{
    scale: number;
    marginLeftSpacer?: number;
    style: TextStyle;
}>;

export const WhiteText: React.FC<WhiteTextProps> = (props: WhiteTextProps) => {
    return (
        <TextStyled scale={props.scale} style={props.style} marginLeftSpacer={props?.marginLeftSpacer}>
            {props.children}
        </TextStyled>
    );
};
