import { EdgeInsets } from 'react-native-safe-area-context/src/SafeArea.types';
import styled from 'styled-components/native';

export const ScrollFooter = styled.View<{ insets: EdgeInsets }>`
    height: ${(props) =>
        props.insets.bottom
            ? props.insets.bottom + props.theme.tabBarHeight + props.theme.spacer
            : props.theme.spacer * 2 + props.theme.tabBarHeight}px;
`;
