import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const SafeAreaThemed = styled(SafeAreaView)`
    flex: 1;
    background-color: ${(props) => props.theme.colors.background};
`;