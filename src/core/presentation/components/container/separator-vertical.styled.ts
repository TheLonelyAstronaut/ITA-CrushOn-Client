import styled from 'styled-components/native';

import { SeparatorVerticalType } from '../../themes/types';

export const SeparatorVertical = styled.View<{ height: SeparatorVerticalType }>`
    height: ${(props) => {
        switch (props.height) {
            case SeparatorVerticalType.large:
                return props.theme.separators.vertical.large;
            case SeparatorVerticalType.medium:
                return props.theme.separators.vertical.medium;
            case SeparatorVerticalType.small:
                return props.theme.separators.vertical.small;
            case SeparatorVerticalType.extrasmall:
                return props.theme.separators.vertical.extrasmall;
            default:
                return props.theme.separators.vertical.medium;
        }
    }}px;
`;
