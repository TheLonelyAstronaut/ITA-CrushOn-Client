import styled from "styled-components/native";

export const CardsViewStyled = styled.View`
    padding-horizontal: ${(props) => props.theme.spacer}px;
    height: ${(props) => props.insets.bottom ? (
        props.theme.dimensions.height -
        props.insets.top - 
        props.insets.bottom - 
        props.theme.tabBarHeight - 
        props.theme.spacer
    ) : (
        props.theme.dimensions.height - 
        props.insets.top - 
        props.theme.tabBarHeight - 
        props.theme.spacer *
        2
    )}px;
    width: ${(props) => props.theme.dimensions.width}px;
`;