import styled from 'styled-components/native';

export const PickerOutline = styled.Pressable`
    border-width: 1px;
    border-color: ${(props) => props.theme.colors.componentLabel};
    align-items: center;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
    margin-horizontal: ${(props) => props.theme.spacer * 2}px;
    padding-bottom: ${(props) => props.theme.spacer}px;
    padding-top: ${(props) => (props.theme.spacer * 6) / 8}px;
`;
