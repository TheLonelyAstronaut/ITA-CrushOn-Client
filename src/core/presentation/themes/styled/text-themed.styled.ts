import styled from "styled-components/native";

export const TextThemedStyled = styled.Text`
    color: ${(props) => props.theme.colors.text};
    font-weight: ${(props) => {switch(props.type) {
        case 'name': 
            return props.theme.fontWeight.bold;
        case 'geo': 
            return props.theme.fontWeight.normal;
        case 'header': 
            return props.theme.fontWeight.bold;
        case 'regular':
            return props.theme.fontWeight.normal;
        default:
            return props.theme.fontWeight.normal;
    }}};
    font-size: ${(props) => {switch(props.type) {
        case 'name': 
            return props.theme.fontSize.names;
        case 'geo': 
            return props.theme.fontSize.large;
        case 'header': 
            return props.theme.fontSize.extralarge;
        case 'regular':
            return props.theme.fontSize.medium;
        default:
            return props.theme.fontSize.medium;
    }}}px;
`;