import styled from 'styled-components/native';

export const PassionOutline = styled.Pressable<{ borderColor: string }>`
    margin-vertical: ${(props) => props.theme.spacer / 2}px;
    margin-right: ${(props) => props.theme.spacer * 1.25}px;
    align-items: center;
    padding-vertical: ${(props) => props.theme.spacer / 2}px;
    padding-horizontal: ${(props) => props.theme.spacer * 1.25}px;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
    border-width: 1px;
    border-color: ${(props) => props.borderColor};
`;
