import styled from "styled-components/native";

export const Colored = styled.View`
    padding-horizontal: ${(props) => props.theme.spacer * 1.5}px;
    margin-horizontal: ${(props) => props.theme.spacer}px;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
    background-color: ${(props) => props.theme.colors.component};
    flex-direction: row;
    padding-bottom: ${(props) => props.theme.spacer}px;
    padding-top: ${(props) => props.theme.spacer * 6 / 8}px;
    justify-content: center;
`;