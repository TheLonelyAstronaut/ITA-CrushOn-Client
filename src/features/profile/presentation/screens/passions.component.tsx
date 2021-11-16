/* eslint-disable react/no-unescaped-entities */
import React, { useCallback } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DoneButton } from "../../../../core/presentation/components/button/done-button.styled";
import { Center } from "../../../../core/presentation/components/container/center.styled";
import { SafeArea } from "../../../../core/presentation/components/container/safe-area-themed.styled";
import { Scroll } from "../../../../core/presentation/components/container/scroll.styled";
import { SeparatorVertical } from "../../../../core/presentation/components/container/separator-vertical.styled";
import { Text } from "../../../../core/presentation/components/text/text.styled";
import { SeparatorVerticalType, TextType } from "../../../../core/presentation/themes/types";
import { PassionsData } from "../../../../mocks/passions.data";
import { Passion } from '../components/passion-item.component';
import { Description } from "../components/styled/description-container.styled";
import { PassionsContainer } from "../components/styled/passions-container.styled";
import { PassionsScreenNavigationProp } from "../navigation/routing.types";



export type PassionsScreenProps = {
    navigation: PassionsScreenNavigationProp
};

export const PassionsScreen: React.FC<PassionsScreenProps> = (props: PassionsScreenProps) => {
    const insets = useSafeAreaInsets();
    const done = useCallback(
        () => {
            props.navigation.goBack();
        },
        [props]
    );

    return (
        <SafeArea edges={['top']}>
            <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

            <Center>
                <Text type={TextType.header}>Passions</Text>
            </Center>

            <SeparatorVertical height={SeparatorVerticalType.medium} />

            <Description>
                <Text type={TextType.regular}>Select passions that you'd like to share. Choose at least 3 and maximum of 7.</Text>
            </Description>

            <SeparatorVertical height={SeparatorVerticalType.medium} />

            <Scroll>
                <PassionsContainer>
                    {PassionsData.map((item, index) => {
                        return (
                            <Passion key={index.toString()} label={item}/>
                        );
                    })}
                </PassionsContainer>
            </Scroll>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>Done</Text>
            </DoneButton>
        </SafeArea>
    );
};