import { EdgeInsets } from "react-native-safe-area-context/src/SafeArea.types";
import styled from "styled-components/native";

export const AppealContainer = styled.View<{insets: EdgeInsets}>`
    flex: 1;
    padding-top: ${(props) => props.insets.top + props.theme.dimensions.height * 0.05}px;
    padding-horizontal: ${(props) => props.theme.dimensions.width / 5}px;
`;