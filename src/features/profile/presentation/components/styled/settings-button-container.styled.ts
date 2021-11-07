import styled from "styled-components/native";

export const SettingsWrapper = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding-top: ${(props) => props.theme.spacer}px;
    padding-right: ${(props) => props.theme.spacer*2}px;
`;