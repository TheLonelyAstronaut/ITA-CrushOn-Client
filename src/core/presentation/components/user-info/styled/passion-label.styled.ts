import styled from 'styled-components/native';

export const PassionLabel = styled.Text<{ color: string }>`
    padding-left: ${(props) => props.theme.spacer / 4}px;
    font-size: ${(props) => props.theme.fontSize.medium}px;
    color: ${(props) => props.color};
`;
