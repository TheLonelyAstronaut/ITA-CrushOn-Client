import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { useTheme } from 'styled-components';
import { DefaultTheme } from 'styled-components/native';

import { EditSVG } from '../../../../assets/components/edit-icon.component';
import { MoreSVG } from '../../../../assets/components/more-icon.component';
import { getUser } from '../../../../core/data/store/user/user.selectors';
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
    const { t } = useTranslation();
    const user: User = useSelector(getUser);

    const editProfile = useCallback(() => {
        props.navigation.navigate('EditProfile');
    }, [props]);

    const toSettings = useCallback(() => {
        props.navigation.navigate('Settings');
    }, [props]);

    return (
        <SafeArea>
            <Scroll showsVerticalScrollIndicator={false}>
                <SettingsWrapper>
                    <Pressable onPress={toSettings}>
                        <MoreSVG color={currentTheme.colors.componentLabel} />
                    </Pressable>
                </SettingsWrapper>

                <SeparatorVertical height={SeparatorVerticalType.small} />

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
                        <Text type={TextType.label}>{t('profile.editProfile')}</Text>
                    </LabeledButton>
                </Center>

                <SeparatorVertical height={SeparatorVerticalType.large} />

                <UserInfo user={user} />

                <ScrollFooter insets={insets} />
            </Scroll>
        </SafeArea>
    );
};
