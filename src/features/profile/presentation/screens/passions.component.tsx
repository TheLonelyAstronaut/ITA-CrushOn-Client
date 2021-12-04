/* eslint-disable react/no-unescaped-entities */
import React, { useCallback } from "react";
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { DoneButton } from "../../../../core/presentation/components/button/done-button.styled";
import { Center } from "../../../../core/presentation/components/container/center.styled";
import { SafeArea } from "../../../../core/presentation/components/container/safe-area-themed.styled";
import { ScrollFooter } from "../../../../core/presentation/components/container/scroll-footer.styled";
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
    const {t} = useTranslation();

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
                <Text type={TextType.header}>{t('profile.passions')}</Text>
            </Center>

            <SeparatorVertical height={SeparatorVerticalType.medium} />

            <Description>
                <Text type={TextType.regular}>{t('profile.selectPassions')}</Text>
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
                <ScrollFooter insets={insets}/>
            </Scroll>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>{t('common.done')}</Text>
            </DoneButton>
        </SafeArea>
    );
};