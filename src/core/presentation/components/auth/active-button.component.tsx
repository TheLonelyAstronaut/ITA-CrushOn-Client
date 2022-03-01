import React from 'react';

import { Outline } from './styled/active-button-container.styled';
import { Label } from './styled/active-button-label.styles';

export type ActiveButtonProps = {
    active: boolean;
    label: string;
    onPress: () => void;
};

export const ActiveButton: React.FC<ActiveButtonProps> = (props: ActiveButtonProps) => {
    return (
        <Outline testID='signInButton' onPress={props.onPress} active={props.active} disabled={props.active ? false : true}>
            <Label active={props.active}>{props.label}</Label>
        </Outline>
    );
};
