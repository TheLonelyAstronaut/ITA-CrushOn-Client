/* eslint-disable react-native/no-color-literals */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import ImageCropPicker from 'react-native-image-crop-picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import { ArrowRightSVG } from '../../../../assets/components/arrow-right-icon.component';
import { User } from '../../../../core/model/user.model';
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
import { ColoredPressable } from '../components/styled/colored-pressable-container.styled';
import { Passions } from '../components/styled/passions-texted-container.styled';
import { EditProfileScreenNavigationProp } from '../navigation/routing.types';



export type EditProfileScreenProps = {
    navigation: EditProfileScreenNavigationProp;
};

export const EditProfileScreen: React.FC<EditProfileScreenProps> = (props: EditProfileScreenProps) => {
    const currentTheme = useTheme();
    const {t} = useTranslation();
    const user: User = {
        id: 48,
        name: 'Liu',
        age: 23,
        imgUrl: 'https://yt3.ggpht.com/YXesX1-BuQmClDrybWgDnTthrtdD5BjkniOC83HXZZgNBNMNbv1jF50su3DIHrNaLTWWxPBxag=s900-c-k-c0x00ffffff-no-rj',
        lives: 'London',
        location: 4,
        passions: ['Singing with my granny', 'Cybersport', 'Music (but only Kizaru\'s songs)', 'Spirituality', 'Moviemaking like a pro'],
        bio: `Hi, I’m Liu. I'm looking for someone who will go to the cinema with me. Message me if you like Marvel.`,
    };
    const insets = useSafeAreaInsets();
    
    const done = useCallback(
        () => {
            props.navigation.goBack();
        },
        [props]
    );
    const editPassions = useCallback(
        () => {
            props.navigation.navigate('Passions');
        },
        [props]
    );
    
    const [image, setImage] = useState({
        uri: '',
        width: 1,
        height: 1,
        mime: '',
    });
    const [imageIsChanged, setImageChanged] = useState(false);
    const changePhoto = useCallback(
        () => {
            ImageCropPicker.openPicker({
                mediaType: 'photo',
                cropping: true
            }).then(image => {
                setImage({
                    uri: image.path,
                    width: image.width,
                    height: image.height,
                    mime: image.mime,
                });
                setImageChanged(true);
            });
        },
        []
    );

    const [aboutMe, setAboutMe] = useState(user.bio);


    return (
        <SafeArea edges={['top']}>
            <KeyboardAwareScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
                <SeparatorVertical height={SeparatorVerticalType.large} />
                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Center>
                    <Photo
                        source={ imageIsChanged ? image : { uri: user.imgUrl }}
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
                    <TextInput
                        value={aboutMe}
                        onChangeText={setAboutMe}
                        multiline={true}
                    />
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Header>
                    <Text type={TextType.header}>{t('profile.passions')}</Text>
                </Header>
                <ColoredPressable onPress={editPassions}>
                    <Passions>
                        {user.passions.map(
                            (item, index, arr) => 
                                { if (index !== arr.length - 1) {
                                    return (
                                        <Text type={TextType.regular} key={index}>{item}, </Text>
                                    );
                                } else {
                                    return (
                                        <Text type={TextType.regular} key={index}>{item}</Text>
                                    );
                                }}
                        )}
                    </Passions>
                    <ArrowRightSVG color={currentTheme.colors.componentLabel} size={16} />
                </ColoredPressable>

                <ScrollFooter insets={insets}/>
            </KeyboardAwareScrollView>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>{t('common.done')}</Text>
            </DoneButton>
        </SafeArea>
    );
};
