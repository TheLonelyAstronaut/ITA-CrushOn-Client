import styled from 'styled-components/native';

import { TextType } from '../../themes/types';

export const Text = styled.Text<{ type: TextType; scale?: number }>`
    color: ${(props) => {
        switch (props.type) {
            case TextType.name:
                return props.theme.colors.text;
            case TextType.geo:
                return props.theme.colors.text;
            case TextType.header:
                return props.theme.colors.text;
            case TextType.regular:
                return props.theme.colors.text;
            case TextType.cardName:
                return props.theme.colors.cardText;
            case TextType.cardGeo:
                return props.theme.colors.cardText;
            case TextType.label:
                return props.theme.colors.componentLabel;
            case TextType.button:
                return props.theme.colors.contrast;
            default:
                return props.theme.colors.text;
        }
    }};
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
            case TextType.cardName:
                return props.theme.fontWeight.bold;
            case TextType.cardGeo:
                return props.theme.fontWeight.normal;
            case TextType.label:
                return props.theme.fontWeight.normal;
            case TextType.button:
                return props.theme.fontWeight.bold;
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
            case TextType.cardName:
                return props.theme.fontSize.large * (props?.scale ?? 1); // props?.scale ? props?.scale : 1
            case TextType.cardGeo:
                return props.theme.fontSize.medium * (props?.scale ?? 1);
            case TextType.label:
                return props.theme.fontSize.medium;
            case TextType.button:
                return props.theme.fontSize.medium;
            default:
                return props.theme.fontSize.medium;
        }
    }}px;
    margin-left: ${(props) => {
        switch (props.type) {
            case TextType.label:
                return props.theme.spacer / 4;
            case TextType.button:
                return props.theme.spacer / 4;
            default:
                return 0;
        }
    }}px;
    margin-right: ${(props) => {
        switch (props.type) {
            case TextType.cardGeo:
                return (props.theme.spacer / 4) * (props?.scale ?? 1);
            default:
                return 0;
        }
    }}px;
`;
