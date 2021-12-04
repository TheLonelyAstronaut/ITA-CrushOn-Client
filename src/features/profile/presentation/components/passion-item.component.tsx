import React, { useCallback, useState } from 'react';
import { useTheme } from 'styled-components';

import { PassionLabel } from '../../../../core/presentation/components/user-info/styled/passion-label.styled';

import { PassionOutline } from './styled/passion-item-container.styled';

export type PassionProps = {
    label: string;
};

export const Passion: React.FC<PassionProps> = (props: PassionProps) => {
    const currentTheme = useTheme();
    const defaultColor = currentTheme.colors.text;
    const activeColor = currentTheme.colors.contrast;
    const [color, setColor] = useState(defaultColor);

    const changeColor = useCallback(() => {
        if (color === defaultColor) {
            setColor(activeColor);
        } else {
            setColor(defaultColor);
        }
    }, [color, defaultColor, activeColor]);

    return (
        <PassionOutline borderColor={color} onPress={changeColor}>
            <PassionLabel color={color}>{props.label}</PassionLabel>
        </PassionOutline>
    );
};
