import styled from 'styled-components/native';
import {ColorValue} from "react-native";

export const PassionView = styled.View<{ backgroundColor: ColorValue }>`
    margin-vertical: ${(props) => props.theme.spacer / 2}px;
    margin-right: ${(props) => props.theme.spacer * 1.25}px;
    align-items: center;
    padding-vertical: ${(props) => props.theme.spacer / 2}px;
    padding-horizontal: ${(props) => props.theme.spacer * 1.25}px;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
    background-color: ${(props) => props.backgroundColor as string};
`;
