import styled from "styled-components/native";

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    margin-top: ${(props) => props.theme.spacer}px;
    margin-bottom: ${(props) => props.theme.spacer*3/4}px;
    background-color: ${(props) => props.theme.colors.componentLabel};
`;