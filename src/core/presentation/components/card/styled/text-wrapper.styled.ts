import styled from "styled-components/native";

export const TextWrapperStyled = styled.View`
    align-self: flex-start;
    padding-left: ${(props) => props.theme.spacer*2*props.scale}px;
    padding-bottom: ${(props) => props.theme.spacer*2*props.scale}px;
`;