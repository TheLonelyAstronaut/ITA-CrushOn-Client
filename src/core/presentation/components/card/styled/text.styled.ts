import styled from 'styled-components/native';

export enum TextStyle {
    Bold,
    Normal,
}

export const TextStyled = styled.Text<{ scale: number, marginLeftSpacer?: number, style: TextStyle }>`
    color: #ffffff;
    font-size: ${(props) =>
        props.style === TextStyle.Bold
            ? props.theme.fontSize.large * props.scale
            : props.theme.fontSize.extraSmall * props.scale}px;
    font-weight: ${(props) => (props.style === TextStyle.Bold ? props.theme.fontWeight.bold : props.theme.fontWeight.normal)};
    margin-left: ${(props) => (props?.marginLeftSpacer ? props?.marginLeftSpacer * props.theme.spacer : 0)}px;
`;
