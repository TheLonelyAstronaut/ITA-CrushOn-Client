import React from 'react';
import { Pressable, Text } from 'react-native';
import { useTheme } from 'styled-components/native';

export type textedButtonProps = {
    onPress: () => void;
    text: string;
};

export const TextedButton: React.FC<textedButtonProps> = (props: textedButtonProps) => {
    const theme = useTheme();
    return (
        <Pressable
            onPress={props.onPress}
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
                padding: theme.spacer,
            }}
        >
            <Text
                style={{
                    color: theme.colors.contrast,
                    fontSize: theme.fontSize.large,
                }}
            >
                {props.text}
            </Text>
        </Pressable>
    );
};
