import styled from "styled-components/native";

export const TextInput = styled.TextInput`
    flex: 1;
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.medium}px;
    align-self: center;
    padding: 0px;
`;