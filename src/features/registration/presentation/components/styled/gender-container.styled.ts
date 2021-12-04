import styled from 'styled-components/native';

export const GenderOutline = styled.Pressable<{ selected: boolean }>`
    border-width: ${(props) => (props.selected ? 2 : 1)}px;
    border-color: ${(props) => (props.selected ? props.theme.colors.contrast : props.theme.colors.text)};
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
    margin-vertical: ${(props) => (props.selected ? 0 : 1)}px;
    margin-horizontal: ${(props) => props.theme.spacer * 2}px;
    padding-bottom: ${(props) => props.theme.spacer}px;
    padding-top: ${(props) => (props.theme.spacer * 6) / 8}px;
`;
