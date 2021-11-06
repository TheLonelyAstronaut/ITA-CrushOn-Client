import styled from "styled-components/native";

export const ImageBackgroundStyled = styled.ImageBackground`
    flex: 1;
    border-radius: ${(props) => props.theme.borderRadius.medium}px;
`;