import styled from "styled-components/native";

export const DiscoverViewStyled = styled.View`
    width: ${(props) => 
        (props.theme.dimensions.width -
        (props.theme.spacer * 
        3)) / 
        2
    }px;
    height: ${(props) => props.insets.bottom ? (
        (props.theme.dimensions.height - 
        props.insets.top -
        props.theme.tabBarHeight - 
        props.insets.bottom -
        props.theme.spacer *
        2) /
        2
    ) : (
        (props.theme.dimensions.height - 
        props.insets.top - 
        (props.theme.spacer * 
        3) -
        props.theme.tabBarHeight) / 
        2
    )}px;
    margin-left: ${(props) => props.theme.spacer}px;
    margin-bottom: ${(props) => props.theme.spacer}px;
`;