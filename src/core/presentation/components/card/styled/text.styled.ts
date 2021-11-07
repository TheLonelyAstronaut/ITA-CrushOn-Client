import styled from 'styled-components/native';

import { TextType } from '../../../themes/types';

export const CardText = styled.Text<{ scale: number; type: TextType }>`
    color: #ffffff;
    font-weight: ${(props) => {
        switch (props.type) {
            case TextType.cardName:
                return props.theme.fontWeight.bold;
            case TextType.cardGeo:
                return props.theme.fontWeight.normal;
            default:
                return props.theme.fontWeight.normal;
        }
    }};
    font-size: ${(props) => {
        switch (props.type) {
            case TextType.cardName:
                return props.theme.fontSize.large * props.scale;
            case TextType.cardGeo:
                return props.theme.fontSize.extraSmall * props.scale;
            default:
                return props.theme.fontSize.extraSmall * props.scale;
        }
    }}px;
    margin-left: ${(props) => {if (props.type === TextType.cardGeo) {
        return props.theme.spacer * props.scale} else {
            return 0
        }}}px;
`;
