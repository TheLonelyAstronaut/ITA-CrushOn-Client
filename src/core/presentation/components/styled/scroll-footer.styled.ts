import styled from "styled-components/native";

export const ScrollFooter = styled.View`
    height: ${(props) => props.insets.bottom ? (
        props.insets.bottom +
        props.theme.tabBarHeight +
        props.theme.spacer
    ) : (
        props.theme.spacer * 
        2 + 
        props.theme.tabBarHeight
    )}px;
`;