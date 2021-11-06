import React, { PropsWithChildren } from 'react';
import { CardsViewStyled } from './styled/cards-view.styled';

type CardsViewProps = PropsWithChildren<{
    insets: {
        top: number;
        bottom: number;
    };
}>;

export const CardsView: React.FC<CardsViewProps> = (props: CardsViewProps) => {
    return <CardsViewStyled insets={props.insets}>{props.children}</CardsViewStyled>;
};
