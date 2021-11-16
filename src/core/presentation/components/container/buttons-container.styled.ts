import { EdgeInsets } from "react-native-safe-area-context/src/SafeArea.types";
import styled from "styled-components/native";


export const Buttons = styled.View<{insets: EdgeInsets}>`
    background-color: ${(props) => props.theme.colors.background};
    margin-horizontal: ${(props) => props.theme.spacer * 2}px;
    padding-horizontal: ${(props) => props.theme.spacer * 2}px;
    padding-bottom: ${(props) => props.insets.bottom + props.theme.spacer * 2}px;
    padding-top: ${(props) => props.theme.spacer * 2}px;
`;