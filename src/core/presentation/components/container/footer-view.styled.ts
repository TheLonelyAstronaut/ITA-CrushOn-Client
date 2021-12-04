import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const FooterView = styled.View<{ insets: EdgeInsets }>`
    height: ${(props) =>
        props.insets.bottom
            ? props.insets.bottom + props.theme.tabBarHeight
            : props.theme.spacer + props.theme.tabBarHeight}px;
`;
