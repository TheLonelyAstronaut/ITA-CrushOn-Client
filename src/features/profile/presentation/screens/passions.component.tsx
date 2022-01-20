/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { getPassionsData } from '../../../../core/data/store/remote-config/remote-config.selectors';
import { getPassionsDangerously, getUserDangerously } from '../../../../core/data/store/user/user.selectors';
import { Passion } from '../../../../core/model/user.model';
import { DoneButton } from '../../../../core/presentation/components/button/done-button.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { ScrollFooter } from '../../../../core/presentation/components/container/scroll-footer.styled';
import { Scroll } from '../../../../core/presentation/components/container/scroll.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Text } from '../../../../core/presentation/components/text/text.styled';
import { SeparatorVerticalType, TextType } from '../../../../core/presentation/themes/types';
import { SET_USER_INFO } from '../../data/store/edit-profile.actions';
import { PassionItem } from '../components/passion-item.component';
import { Description } from '../components/styled/description-container.styled';
import { PassionsContainer } from '../components/styled/passions-container.styled';
import { PassionsScreenNavigationProp } from '../navigation/routing.types';

export type PassionsScreenProps = {
    navigation: PassionsScreenNavigationProp;
};

export const PassionsScreen: React.FC<PassionsScreenProps> = (props: PassionsScreenProps) => {
    const insets = useSafeAreaInsets();
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const user = useSelector(getUserDangerously);
    const passionsData = useSelector(getPassionsData);
    const passionsUser = useSelector(getPassionsDangerously);

    const [passions, setPassions] = useState(passionsUser);

    const handleSelection = useCallback((selectedPassion: Passion) => {
        let isIncluded = false;
        passions.forEach(passion => {
            if (passion.id === selectedPassion.id) isIncluded = true;
        })
        if (isIncluded) {
            const newPassions = passions.filter((passion) => {
                return passion.id !== selectedPassion.id;
            });
            setPassions(newPassions);
        } else {
            setPassions([...passions, selectedPassion]);
        }
    }, [passions, setPassions]);

    const done = useCallback(() => {
        dispatch(SET_USER_INFO.COMPLETED({
            ...user,
            passions: passions,
        }));
        props.navigation.goBack();
    }, [props, user, passions, dispatch]);

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
                    {passionsData.map((item, index) => {
                        let isIncluded = false;
                        passions.forEach(passion => {
                            if (passion.id === item.id) isIncluded = true;
                        })
                        if (isIncluded) {
                            return <PassionItem key={index.toString()} passion={item} selected={true} handleSelection={handleSelection}/>;
                        } else {
                            return <PassionItem key={index.toString()} passion={item} selected={false} handleSelection={handleSelection}/>;
                        }
                    })}
                </PassionsContainer>
                <ScrollFooter insets={insets} />
            </Scroll>

            <DoneButton insets={insets} onPress={done}>
                <Text type={TextType.button}>{t('common.done')}</Text>
            </DoneButton>
        </SafeArea>
    );
};
