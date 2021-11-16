import React, { useCallback, useState } from "react";
import { Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ActiveButton } from "../../../../core/presentation/components/auth/active-button.component";
import { AuthBackground } from "../../../../core/presentation/components/container/auth-background.styled";
import { AuthInputContainer } from "../../../../core/presentation/components/container/auth-input-container.styled";
import { Button } from "../../../../core/presentation/components/container/button-container.styled";
import { Buttons } from "../../../../core/presentation/components/container/buttons-container.styled";
import { SeparatorVertical } from "../../../../core/presentation/components/container/separator-vertical.styled";
import { Label } from "../../../../core/presentation/components/text/label.styled";
import { SeparatorVerticalType } from "../../../../core/presentation/themes/types";
import { Gender } from "../components/gender-item.component";
import { AppealContainer } from "../components/styled/appeal-container.styled";
import { Appeal } from "../components/styled/appeal-text.styled";
import { GenderScreenNavigationProp } from "../navigation/routing.types";

export type GenderScreenProps = {
    navigation: GenderScreenNavigationProp;
};

export const GenderScreen: React.FC<GenderScreenProps> = (props: GenderScreenProps) => {
    const insets = useSafeAreaInsets();
    
    const goBack = useCallback(
        () => {
            props.navigation.goBack();
        },
        [props]
    );
    const goNext = useCallback(
        () => {
            props.navigation.navigate('Birthday');
        },
        [props]
    );

    const [maleSelected, setMaleSelected] = useState(false);
    const toggleMale = useCallback(
        () => {
            setFemaleSelected(maleSelected ? true : false);
            setMaleSelected(maleSelected ? false : true);
        },
        [maleSelected]
    );

    const [femaleSelected, setFemaleSelected] = useState(false);
    const toggleFemale = useCallback(
        () => {
            setMaleSelected(femaleSelected ? true : false);
            setFemaleSelected(femaleSelected ? false : true);
        },
        [femaleSelected]
    );
    
    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>POINT</Appeal>
                <Appeal>YOUR GENDER</Appeal>
            </AppealContainer>

            <AuthInputContainer behavior={Platform.OS === "ios" ? "padding" : undefined} >
                <Gender gender={'Male'} selected={maleSelected} toggle={toggleMale}/>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

                <Gender gender={'Female'} selected={femaleSelected} toggle={toggleFemale}/>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton onPress={goNext} active={(maleSelected || femaleSelected) ? true : false} label={'Continue'}/>
                
                <Button onPress={goBack}>
                    <Label>Return</Label>
                </Button>
            </Buttons>
        </AuthBackground>
    );
};