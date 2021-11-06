import styled from "styled-components/native";

export const TextStyled = styled.Text`
    color: #FFFFFF;
    font-size: ${(props) => props.style === 'bold' ? (
        props.theme.fontSize.large * props.scale
    ) : (
        props.theme.fontSize.extraSmall * props.scale
    )}px;
    font-weight: ${(props) => props.style === 'bold' ? (
        props.theme.fontWeight.bold
    ) : (
        props.theme.fontWeight.normal
    )};
    margin-left: ${(props) => props?.marginLeftSpacer ? (
        props?.marginLeftSpacer*props.theme.spacer
    ) : (
        0
    )}px;
`;