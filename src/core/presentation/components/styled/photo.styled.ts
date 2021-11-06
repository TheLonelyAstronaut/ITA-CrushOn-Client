import styled from "styled-components/native";

export const Photo = styled.ImageBackground`
    width: ${(props) => props.theme.photo.width}px;
    height: ${(props) => props.theme.photo.height}px;
`;