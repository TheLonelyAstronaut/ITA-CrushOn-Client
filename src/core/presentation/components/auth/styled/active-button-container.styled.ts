import styled from 'styled-components/native';

export const Outline = styled.Pressable<{ active: boolean }>`
    margin-vertical: ${(props) => (props.active ? props.theme.spacer : props.theme.spacer + 1)}px;
    align-items: center;
    padding-vertical: ${(props) => props.theme.spacer}px;
    border-radius: ${(props) => props.theme.borderRadius.medium}px;
    border-width: ${(props) => (props.active ? 2 : 1)}px;
    border-color: ${(props) => props.theme.colors.componentLabel};
`;
