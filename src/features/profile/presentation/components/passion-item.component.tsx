import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';

import { PassionLabel } from '../../../../core/presentation/components/user-info/styled/passion-label.styled';

import { PassionOutline } from './styled/passion-item-container.styled';

export type PassionProps = {
    label: string;
    selected: boolean;
    handleSelection: (passion: string) => void;
};

export const Passion: React.FC<PassionProps> = (props: PassionProps) => {
    const currentTheme = useTheme();
    const unactiveColor = currentTheme.colors.text;
    const activeColor = currentTheme.colors.contrast;

    const color = props.selected ? activeColor : unactiveColor;

    const handleOnPress = useCallback(() => {
        props.handleSelection(props.label);
    }, [props])

    return (
        <PassionOutline borderColor={color} onPress={handleOnPress}>
            <PassionLabel color={color}>{props.label}</PassionLabel>
        </PassionOutline>
    );
};
