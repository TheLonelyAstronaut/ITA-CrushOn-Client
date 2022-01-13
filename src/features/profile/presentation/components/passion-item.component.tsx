import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';

import { Passion } from '../../../../core/model/user.model';
import { PassionLabel } from '../../../../core/presentation/components/user-info/styled/passion-label.styled';

import { PassionOutline } from './styled/passion-item-container.styled';

export type PassionItemProps = {
    passion: Passion;
    selected: boolean;
    handleSelection: (passion: Passion) => void;
};

export const PassionItem: React.FC<PassionItemProps> = (props: PassionItemProps) => {
    const currentTheme = useTheme();
    const unactiveColor = currentTheme.colors.text;
    const activeColor = currentTheme.colors.contrast;

    const color = props.selected ? activeColor : unactiveColor;

    const handleOnPress = useCallback(() => {
        props.handleSelection(props.passion);
    }, [props])

    return (
        <PassionOutline borderColor={color} onPress={handleOnPress}>
            <PassionLabel color={color}>{props.passion.description}</PassionLabel>
        </PassionOutline>
    );
};
