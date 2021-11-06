import styled from "styled-components/native";

export const ButtonLabeled = styled.Pressable`
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.theme.colors.component}; 
    padding-horizontal: ${(props) => props.theme.spacer}px;
    padding-vertical: ${(props) => props.theme.spacer/2}px;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
`;