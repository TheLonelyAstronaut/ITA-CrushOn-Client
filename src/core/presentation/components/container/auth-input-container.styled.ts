import { KeyboardAvoidingView } from "react-native";
import styled from "styled-components/native";

export const AuthInputContainer = styled(KeyboardAvoidingView)`
    background-color: ${(props) => props.theme.colors.background};
    border-top-left-radius: ${(props) => props.theme.borderRadius.small}px;
    border-top-right-radius: ${(props) => props.theme.borderRadius.small}px;
    margin-horizontal: ${(props) => props.theme.spacer * 2}px;
    padding-horizontal: ${(props) => props.theme.spacer * 2}px;
    padding-top: ${(props) => props.theme.spacer * 2}px;
`;