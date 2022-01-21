/* eslint-disable react-native/no-color-literals */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from 'styled-components';

import { ArrowRightSVG } from '../../../../assets/components/arrow-right-icon.component';
import { getPassionsDangerously, getUserDangerously } from '../../../../core/data/store/user/user.selectors';
import { DoneButton } from '../../../../core/presentation/components/button/done-button.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { Colored } from '../../../../core/presentation/components/container/colored-container.styled';
import { Header } from '../../../../core/presentation/components/container/header-container.styled';
import { Photo } from '../../../../core/presentation/components/container/photo.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { ScrollFooter } from '../../../../core/presentation/components/container/scroll-footer.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { TextInput } from '../../../../core/presentation/components/text/text-input.styled';
import { Text } from '../../../../core/presentation/components/text/text.styled';
import { SeparatorVerticalType, TextType } from '../../../../core/presentation/themes/types';
import { useResolveLocalizedString } from '../../../../core/util/resolve-localized-string.util';
import { PhotoPicker } from '../../../../core/util/upload.util';
import { SET_USER_INFO } from '../../data/store/edit-profile.actions';
import { ColoredPressable } from '../components/styled/colored-pressable-container.styled';
import { Passions } from '../components/styled/passions-texted-container.styled';
import { EditProfileScreenNavigationProp } from '../navigation/routing.types';

export type EditProfileScreenProps = {
    navigation: EditProfileScreenNavigationProp;
};

export const EditProfileScreen: React.FC<EditProfileScreenProps> = (props: EditProfileScreenProps) => {
    const currentTheme = useTheme();
    const { t } = useTranslation();
    const user = useSelector(getUserDangerously);
    const passions = useSelector(getPassionsDangerously);
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const passionsNames = useResolveLocalizedString(passions);

    const passionsId = passions ? passions.map((item) => item.id) : [];

    const [photo, setPhoto] = useState<PhotoPicker>({
        path: '',
        width: 1,
        height: 1,
        mime: '',
    });
    const [photoIsChanged, setPhotoChanged] = useState(false);

    const changePhoto = useCallback(() => {
        ImageCropPicker.openPicker({
            mediaType: 'photo',
            cropping: true,
        }).then((image) => {
            setPhoto({
                path: image.path,
                width: image.width,
                height: image.height,
                mime: image.mime,
            });
            setPhotoChanged(true);
        });
    }, []);

    const [bio, setBio] = useState(user.bio as string | '');

    const done = useCallback(() => {
        dispatch(
            SET_USER_INFO.STARTED({
                bio: bio,
                passions: passionsId,
                photo: photoIsChanged ? photo : user.photo.id,
            })
        );
        props.navigation.goBack();
    }, [bio, dispatch, passionsId, photo, photoIsChanged, props.navigation, user.photo.id]);

    const goToEditPassions = useCallback(() => {
        props.navigation.navigate('Passions');
    }, [props]);

    return (
        <SafeArea edges={['top']}>
            <KeyboardAwareScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                <SeparatorVertical height={SeparatorVerticalType.large} />
                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Center>
                    <Photo
                        source={photoIsChanged ? { uri: photo.path } : { uri: user.photo.link }}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: currentTheme.photo.borderRadius }}
                    />
                </Center>

                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Center>
                    <Pressable onPress={changePhoto}>
                        <Text type={TextType.button}>{t('profile.changePhoto')}</Text>
                    </Pressable>
                </Center>

                <SeparatorVertical height={SeparatorVerticalType.medium} />

                <Header>
                    <Text type={TextType.header}>{t('profile.about')}</Text>
                </Header>
                <Colored>
                    <TextInput value={bio} onChangeText={setBio} multiline={true} />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Header>
                    <Text type={TextType.header}>{t('profile.passions')}</Text>
                </Header>
                <ColoredPressable onPress={goToEditPassions}>
                    <Passions>
                        {passions &&
                            passions.map((item, index, arr) => {
                                if (index !== arr.length - 1) {
                                    return (
                                        <Text type={TextType.regular} key={index}>
                                            {passionsNames[index]},{' '}
                                        </Text>
                                    );
                                } else {
                                    return (
                                        <Text type={TextType.regular} key={index}>
                                            {passionsNames[index]}
                                        </Text>
                                    );
                                }
                            })}
                    </Passions>
                    <ArrowRightSVG color={currentTheme.colors.componentLabel} size={16} />
                </ColoredPressable>

                <ScrollFooter insets={insets} />
            </KeyboardAwareScrollView>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>{t('common.done')}</Text>
            </DoneButton>
        </SafeArea>
    );
};
