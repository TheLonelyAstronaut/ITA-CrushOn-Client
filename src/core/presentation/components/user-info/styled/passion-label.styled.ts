import styled from 'styled-components/native';
import {ColorValue} from "react-native";

export const PassionLabel = styled.Text<{ color: ColorValue }>`
    padding-left: ${(props) => props.theme.spacer / 4}px;
    font-size: ${(props) => props.theme.fontSize.medium}px;
    color: ${(props) => props.color as string};
`;
