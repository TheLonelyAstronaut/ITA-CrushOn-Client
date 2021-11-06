import styled from "styled-components/native";

export const SeparatorVert = styled.View`
    height: ${(props) => {switch(props.height) {
        case 'large': 
            return props.theme.separators.vertical.large;
        case 'medium': 
            return props.theme.separators.vertical.medium;
        case 'small': 
            return props.theme.separators.vertical.small;
        case 'extrasmall':
            return props.theme.separators.vertical.extrasmall;
        default:
            return props.theme.separators.vertical.medium;
    }}}px;
`;