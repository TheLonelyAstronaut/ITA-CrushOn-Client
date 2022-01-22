import FastImage from 'react-native-fast-image';
import styled from 'styled-components/native';

export const Photo = styled(FastImage)`
    width: ${(props) => props.theme.photo.width}px;
    height: ${(props) => props.theme.photo.height}px;
    border-radius: ${(props) => props.theme.borderRadius.medium}px;
`;
