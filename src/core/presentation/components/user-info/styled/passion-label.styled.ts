import styled from 'styled-components/native';

export const PassionLabel = styled.Text<{ color: string }>`
    font-size: ${(props) => props.theme.fontSize.medium}px;
    color: ${(props) => props.color};
`;
