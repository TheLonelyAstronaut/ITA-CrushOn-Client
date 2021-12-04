import styled from 'styled-components/native';

export const Button = styled.Pressable`
    margin-vertical: ${(props) => props.theme.spacer}px;
    align-items: center;
    padding-vertical: ${(props) => props.theme.spacer}px;
    border-radius: ${(props) => props.theme.borderRadius.medium}px;
    border-width: 2px;
    border-color: ${(props) => props.theme.colors.componentLabel};
`;
