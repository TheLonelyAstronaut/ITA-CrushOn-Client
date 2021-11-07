import styled from 'styled-components/native';

export const CardTextWrapper = styled.View<{ scale: number }>`
    align-self: flex-start;
    padding-left: ${(props) => props.theme.spacer * 2 * props.scale}px;
    padding-bottom: ${(props) => props.theme.spacer * 2 * props.scale}px;
`;
