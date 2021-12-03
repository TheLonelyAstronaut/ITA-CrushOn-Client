import styled from "styled-components/native";

export const SelectableText = styled.Text<{ selected: boolean }>`
    font-size: ${(props) => props.theme.fontSize.large}px;
    color: ${(props) => props.selected ? props.theme.colors.contrast : props.theme.colors.text};
`;