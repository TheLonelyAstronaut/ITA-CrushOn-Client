/* eslint-disable react-native/no-color-literals */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, Pressable } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components/native';

import { AddPhotoSVG } from '../../../../assets/components/add-photo-icon.component';
import { ActiveButton } from '../../../../core/presentation/components/auth/active-button.component';
import { AuthBackground } from '../../../../core/presentation/components/container/auth-background.styled';
import { AuthInputContainer } from '../../../../core/presentation/components/container/auth-input-container.styled';
import { Button } from '../../../../core/presentation/components/container/button-container.styled';
import { Buttons } from '../../../../core/presentation/components/container/buttons-container.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Label } from '../../../../core/presentation/components/text/label.styled';
import { SeparatorVerticalType } from '../../../../core/presentation/themes/types';
import { REGISTRATION } from '../../data/store/registration.actions';
import { getRegistrationData } from '../../data/store/registration.selectors';
import { AppealContainer } from '../components/styled/appeal-container.styled';
import { Appeal } from '../components/styled/appeal-text.styled';
import { PickerOutline } from '../components/styled/picker-button-container.styled';
import { PickerLabel } from '../components/styled/picker-button-label-text.styled';
import { UploadedImage } from '../components/styled/uploaded-image.styled';
import { PhotoScreenNavigationProp } from '../navigation/routing.types';

export type PhotoScreenProps = {
    navigation: PhotoScreenNavigationProp;
};

export const PhotoScreen: React.FC<PhotoScreenProps> = (props: PhotoScreenProps) => {
    const currentTheme = useTheme();
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [image, setImage] = useState({
        path: '',
        width: 300,
        height: 400,
        mime: '',
    });
    const [isSelected, setIsSelected] = useState(false);

    const choosePhoto = useCallback(() => {
        ImageCropPicker.openPicker({
            mediaType: 'photo',
            cropping: true,
            width: 1080,
            height: 1920,
        }).then((image) => {
            setImage({
                path: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            });
            setIsSelected(true);
        });
    }, []);

    const goBack = useCallback(() => {
        props.navigation.goBack();
    }, [props]);
    
    const done = useCallback(() => {
        dispatch(REGISTRATION.SET_PHOTO(image));
    }, [image, dispatch]);

    return (
        <AuthBackground>
            <AppealContainer insets={insets}>
                <Appeal>{t('appeals.uploadPhoto')}</Appeal>
            </AppealContainer>

            <AuthInputContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
                {isSelected ? (
                    <>
                        <UploadedImage resizeMode={'cover'} source={{ uri: image.path }} />
                        <SeparatorVertical height={SeparatorVerticalType.extrasmall} />

                        <PickerOutline onPress={choosePhoto}>
                            <PickerLabel>{t('auth.rechoosePhoto')}</PickerLabel>
                        </PickerOutline>
                    </>
                ) : (
                    <Center>
                        <Pressable onPress={choosePhoto}>
                            <AddPhotoSVG color={currentTheme.colors.contrast} />
                        </Pressable>
                    </Center>
                )}
                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </AuthInputContainer>

            <Buttons insets={insets}>
                <ActiveButton onPress={done} active={isSelected ? true : false} label={t('common.done')} />
            </Buttons>
        </AuthBackground>
    );
};
