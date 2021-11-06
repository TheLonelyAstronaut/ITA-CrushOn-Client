import styled from "styled-components/native";

export const Label = styled.Text`
    padding-left: ${(props) => props.theme.spacer/4}px;
    font-size: ${(props) => props.theme.fontSize.medium}px;
    color: ${(props) => props.theme.colors.componentLabel};
`;