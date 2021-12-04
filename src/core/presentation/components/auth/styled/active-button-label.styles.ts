import styled from 'styled-components/native';

export const Label = styled.Text<{ active: boolean }>`
    font-size: ${(props) => props.theme.fontSize.large}px;
    font-weight: ${(props) => (props.active ? props.theme.fontWeight.bold : props.theme.fontWeight.normal)};
    color: ${(props) => props.theme.colors.componentLabel};
`;
