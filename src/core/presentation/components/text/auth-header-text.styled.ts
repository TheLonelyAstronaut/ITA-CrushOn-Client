import styled from 'styled-components/native';

export const HeaderText = styled.Text`
    font-size: ${(props) => props.theme.fontSize.large}px;
    color: ${(props) => props.theme.colors.text};
`;
