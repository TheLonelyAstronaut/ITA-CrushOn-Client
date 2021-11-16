import React, { useCallback } from 'react';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

import { EditSVG } from '../../../../assets/components/edit-icon.component';
import { LogOutSVG } from '../../../../assets/components/log-out-icon.component';
import { User } from '../../../../core/model/user.model';
import { LabeledButton } from '../../../../core/presentation/components/button/labeled-button.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { Photo } from '../../../../core/presentation/components/container/photo.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { ScrollFooter } from '../../../../core/presentation/components/container/scroll-footer.styled';
import { Scroll } from '../../../../core/presentation/components/container/scroll.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Text } from '../../../../core/presentation/components/text/text.styled';
import { UserInfo } from '../../../../core/presentation/components/user-info/user-info.component';
import { SeparatorVerticalType, TextType } from '../../../../core/presentation/themes/types';
import { SettingsWrapper } from '../components/styled/settings-button-container.styled';
import { ProfileScreenNavigationProp } from '../navigation/routing.types';


export type ProfileScreenProps = {
    navigation: ProfileScreenNavigationProp;
};

export const ProfileScreen: React.FC<ProfileScreenProps> = (props: ProfileScreenProps) => {
    const insets = useSafeAreaInsets();
    const currentTheme: DefaultTheme = useTheme();
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

    const editProfile = useCallback(
        () => {
            props.navigation.navigate('EditProfile');
        },
        [props]
    );

    return (
        <SafeArea>
            <Scroll showsVerticalScrollIndicator={false}>
                <SettingsWrapper>
                    {/* here will be settings button */}
                    <Pressable>
                        <LogOutSVG color={currentTheme.colors.componentLabel} size={24} />
                    </Pressable>
                </SettingsWrapper>

                <SeparatorVertical height={SeparatorVerticalType.medium} />

                <Center>
                    <Photo
                        source={{ uri: user.imgUrl }}
                        resizeMode="cover"
                        imageStyle={{ borderRadius: currentTheme.photo.borderRadius }}
                    />
                </Center>
                
                <SeparatorVertical height={SeparatorVerticalType.medium} />

                <Center>
                    <LabeledButton onPress={editProfile}>
                        <EditSVG color={currentTheme.colors.componentLabel} size={16} />
                        <Text type={TextType.label}>Edit profile</Text>
                    </LabeledButton>
                </Center>

                <SeparatorVertical height={SeparatorVerticalType.large} />

                <UserInfo user={user} />

                <ScrollFooter insets={insets} />
            </Scroll>
        </SafeArea>
    );
};
