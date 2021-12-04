import styled from 'styled-components/native';

export const Avatar = styled.Image`
    width: ${(props) => props.theme.spacer * 8}px;
    height: ${(props) => props.theme.spacer * 8}px;
    border-radius: ${(props) => props.theme.spacer * 4}px;
`;
