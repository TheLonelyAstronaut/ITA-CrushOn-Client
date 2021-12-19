import styled from "styled-components/native";

export const Name = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-size: ${(props) => props.theme.fontSize.large}px;
    font-weight: ${(props) => props.theme.fontWeight.bold};
`;