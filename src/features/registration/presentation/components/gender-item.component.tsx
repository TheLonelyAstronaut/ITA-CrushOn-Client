import React from 'react';

import { GenderOutline } from './styled/gender-container.styled';
import { GenderLabel } from './styled/gender-label-text.styled';

export type GenderProps = {
    selected: boolean;
    gender: string;
    toggle: () => void;
};

export const Gender: React.FC<GenderProps> = (props: GenderProps) => {
    return props.selected ? (
        <GenderOutline disabled={props.selected ? true : false} selected={props.selected} onPress={props.toggle}>
            <GenderLabel selected={props.selected}>{props.gender}</GenderLabel>
        </GenderOutline>
    ) : (
        <GenderOutline disabled={props.selected ? true : false} selected={props.selected} onPress={props.toggle}>
            <GenderLabel selected={props.selected}>{props.gender}</GenderLabel>
        </GenderOutline>
    );
};
