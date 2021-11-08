import { EdgeInsets } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const CancelButton = styled.Pressable<{ insets: EdgeInsets }>`
    position: absolute;
    top: ${(props) => props.insets.top + props.theme.spacer}px;
    left: ${(props) => props.theme.spacer * 2}px;
`;