import { EdgeInsets } from "react-native-safe-area-context/src/SafeArea.types";
import styled from "styled-components/native";

export const DoneButton = styled.Pressable<{ insets: EdgeInsets }>`
    position: absolute;
    top: ${(props) => props.insets.top + props.theme.spacer}px;
    right: ${(props) => props.theme.spacer * 2}px;
`;