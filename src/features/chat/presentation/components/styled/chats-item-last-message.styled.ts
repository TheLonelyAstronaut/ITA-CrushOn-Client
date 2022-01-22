import styled from 'styled-components/native';

export const LastMessage = styled.Text`
    padding-horizontal: ${(props) => props.theme.spacer * 2}px;
    font-size: ${(props) => props.theme.fontSize.medium}px;
    color: ${(props) => props.theme.colors.text};
`;
