import styled from 'styled-components/native';

import { TextType } from '../../themes/types';

export const Text = styled.Text<{ type: TextType }>`
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => {
        switch (props.type) {
            case TextType.name:
                return props.theme.fontWeight.bold;
            case TextType.geo:
                return props.theme.fontWeight.normal;
            case TextType.header:
                return props.theme.fontWeight.bold;
            case TextType.regular:
                return props.theme.fontWeight.normal;
            default:
                return props.theme.fontWeight.normal;
        }
    }};
    font-size: ${(props) => {
        switch (props.type) {
            case TextType.name:
                return props.theme.fontSize.names;
            case TextType.geo:
                return props.theme.fontSize.large;
            case TextType.header:
                return props.theme.fontSize.extralarge;
            case TextType.regular:
                return props.theme.fontSize.medium;
            default:
                return props.theme.fontSize.medium;
        }
    }}px;
`;
