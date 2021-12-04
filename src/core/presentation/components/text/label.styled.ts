import styled from 'styled-components/native';

export const Label = styled.Text`
    font-size: ${(props) => props.theme.fontSize.large}px;
    font-weight: ${(props) => props.theme.fontWeight.bold};
    color: ${(props) => props.theme.colors.componentLabel};
`;
