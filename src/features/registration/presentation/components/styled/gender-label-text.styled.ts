import styled from 'styled-components/native';

export const GenderLabel = styled.Text<{ selected: boolean }>`
    font-size: ${(props) => props.theme.fontSize.large}px;
    font-weight: ${(props) => (props.selected ? props.theme.fontWeight.bold : props.theme.fontWeight.normal)};
    color: ${(props) => (props.selected ? props.theme.colors.contrast : props.theme.colors.text)};
`;
