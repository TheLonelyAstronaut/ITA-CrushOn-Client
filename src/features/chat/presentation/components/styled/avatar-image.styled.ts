import styled from "styled-components/native";

export const Avatar = styled.Image`
    width: ${(props) => props.theme.spacer * 5}px;
    height: ${(props) => props.theme.spacer * 5}px;
    border-radius: ${(props) => props.theme.spacer * 2.5}px;
`;