import styled from 'styled-components/native';

export const EmptyListWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const StyledActivityIndicator = styled.ActivityIndicator``;

StyledActivityIndicator.defaultProps = {
    size: 'large',
};

export const NoMatchesText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-horizontal: ${(props) => props.theme.spacer * 3}px;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
`;
