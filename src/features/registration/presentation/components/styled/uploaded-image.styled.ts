import styled from 'styled-components/native';

export const UploadedImage = styled.Image`
    width: ${(props) => props.theme.dimensions.width - props.theme.spacer * 12}px;
    height: ${(props) => props.theme.dimensions.width}px;
    margin-left: ${(props) => props.theme.spacer * 2}px;
    border-radius: ${(props) => props.theme.borderRadius.small}px;
`;
