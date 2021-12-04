import styled from 'styled-components/native';

export const ChatsItemView = styled.Pressable`
    padding-vertical: ${(props) => props.theme.spacer * 1.5}px;
    padding-horizontal: ${(props) => props.theme.spacer * 3}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
