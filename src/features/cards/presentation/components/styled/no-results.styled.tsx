import styled from 'styled-components/native';

export const NoResultsText = styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-horizontal: ${(props) => props.theme.spacer * 3}px;
    text-align: center;
    color: ${(props) => props.theme.colors.text};
`;

export const NoResultsWrapper = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: ${(props) => props.theme.borderRadius.medium}px;
`;
