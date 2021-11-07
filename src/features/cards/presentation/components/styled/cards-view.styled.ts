import { EdgeInsets } from 'react-native-safe-area-context';
import styled from 'styled-components/native';

export const CardsView = styled.View<{ insets: EdgeInsets; zIndex: number }>`
    padding-horizontal: ${(props) => props.theme.spacer}px;
    margin-top: ${(props) => props.insets.top}px;
    height: ${(props) =>
        props.insets.bottom
            ? props.theme.dimensions.height -
              props.insets.top -
              props.insets.bottom -
              props.theme.tabBarHeight -
              props.theme.spacer
            : props.theme.dimensions.height - props.insets.top - props.theme.tabBarHeight - props.theme.spacer * 2}px;
    width: ${(props) => props.theme.dimensions.width}px;
    position: absolute;
    ${(props) => 'zIndex: ' + props.zIndex}
`;
