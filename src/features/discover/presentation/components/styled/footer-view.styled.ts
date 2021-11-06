import styled from "styled-components/native";

export const FooterStyled = styled.View`
    height: ${(props) => props.insets.bottom ? (
        props.insets.bottom +
        props.theme.tabBarHeight
    ) : (
        props.theme.spacer + 
        props.theme.tabBarHeight
    )}px;
`;