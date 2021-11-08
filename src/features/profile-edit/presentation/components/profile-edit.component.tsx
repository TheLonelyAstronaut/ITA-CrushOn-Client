import React, { useCallback } from 'react';
import { Pressable } from 'react-native';

import { useTheme } from 'styled-components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { SeparatorVerticalType, TextType } from '../../../../core/presentation/themes/types';
import { ProfileEditScreenNavigationProp } from '../navigation/routing.types';

import { User } from '../../../../core/model/user.model';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { Photo } from '../../../../core/presentation/components/container/photo.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { Scroll } from '../../../../core/presentation/components/container/scroll.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Text } from '../../../../core/presentation/components/text/text.styled';
import { DoneButton } from '../../../../core/presentation/components/button/button-done.styled';
import { Header } from './styled/header-container.styled';
import { Colored } from './styled/colored-container.styled';
import { Passions } from './styled/passions-container.styled';
import { ArrowRightSVG } from '../../../../assets/components/arrow-right-icon.component';
import { City } from './styled/city-container.styled';
import { ColoredPressable } from './styled/colored-pressable-container.styled';

export type ProfileEditScreenProps = {
    navigation: ProfileEditScreenNavigationProp;
};

export const ProfileEditScreen: React.FC<ProfileEditScreenProps> = (props: ProfileEditScreenProps) => {
    const currentTheme = useTheme();
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
    
    const cancel = () => {};
    const done = useCallback(
        () => {
            props.navigation.goBack();
        },
        [props]
    );
    const setNewPhoto = () => {};
    const editPassions = useCallback(
        () => {
            props.navigation.navigate('Passions');
        },
        [props]
    );
    const chooseCity = () => {};

    return (
        <SafeArea edges={['top']}>

            <Scroll showsVerticalScrollIndicator={false}>
                <SeparatorVertical height={SeparatorVerticalType.large} />
                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Center>
                    <Photo
                        source={{ uri: user.imgUrl }}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: currentTheme.photo.borderRadius }}
                    />
                </Center>

                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Center>
                    <Pressable onPress={setNewPhoto}>
                        <Text type={TextType.button}>Set new photo</Text>
                    </Pressable>
                </Center>
                
                <SeparatorVertical height={SeparatorVerticalType.medium} />

                <Header>
                    <Text type={TextType.header}>About me</Text>
                </Header>
                <Colored>
                    <Text type={TextType.regular}>{user.bio}</Text>
                </Colored>

                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Header>
                    <Text type={TextType.header}>Passions</Text>
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

                <SeparatorVertical height={SeparatorVerticalType.small} />

                <Header>
                    <Text type={TextType.header}>Live in</Text>
                </Header>
                <ColoredPressable onPress={chooseCity}>
                    <City>
                        <Text type={TextType.regular}>{user.lives}</Text>
                    </City>
                    <ArrowRightSVG color={currentTheme.colors.componentLabel} size={16} />
                </ColoredPressable>

                <SeparatorVertical height={SeparatorVerticalType.extrasmall} />
            </Scroll>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>Done</Text>
            </DoneButton>

        </SafeArea>
    );
};
