import styled from "styled-components/native";

export const PickerLabel = styled.Text`
    font-size: ${(props) => props.theme.fontSize.large}px;
    font-weight: ${(props) => props.theme.fontWeight.normal};
    color: ${(props) => props.theme.colors.componentLabel};
`;