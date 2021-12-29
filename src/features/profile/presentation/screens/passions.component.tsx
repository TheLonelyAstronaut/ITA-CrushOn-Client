/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { getUserPassions } from '../../../../core/data/store/user/user.selectors';
import { DoneButton } from '../../../../core/presentation/components/button/done-button.styled';
import { Center } from '../../../../core/presentation/components/container/center.styled';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { ScrollFooter } from '../../../../core/presentation/components/container/scroll-footer.styled';
import { Scroll } from '../../../../core/presentation/components/container/scroll.styled';
import { SeparatorVertical } from '../../../../core/presentation/components/container/separator-vertical.styled';
import { Text } from '../../../../core/presentation/components/text/text.styled';
import { SeparatorVerticalType, TextType } from '../../../../core/presentation/themes/types';
import { PassionsData } from '../../../../mocks/passions.data';
import { SET_PASSIONS } from '../../data/store/passions.actions';
import { Passion } from '../components/passion-item.component';
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
    const userPassions = useSelector(getUserPassions);

    const [passions, setPassions] = useState(userPassions);

    const handleSelection = useCallback((selectedPassion: string) => {
        if (passions.includes(selectedPassion)) {
            const newPassions = passions.filter((passion) => {
                return passion !== selectedPassion;
            });
            setPassions(newPassions);
        } else {
            setPassions([...passions, selectedPassion]);
        }
    }, [passions, setPassions]);

    const done = useCallback(() => {
        dispatch(SET_PASSIONS.TRIGGER(passions));
        props.navigation.goBack();
    }, [props, passions, dispatch]);

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
                        if (passions.includes(item)) {
                            return <Passion key={index.toString()} label={item} selected={true} handleSelection={handleSelection}/>;
                        } else {
                            return <Passion key={index.toString()} label={item} selected={false} handleSelection={handleSelection}/>;
                        }
                        // passions.includes(item)
                        //     ? <Passion key={index.toString()} label={item} selected={true} handleSelection={handleSelection}/>
                        //     : <Passion key={index.toString()} label={item} selected={false} handleSelection={handleSelection}/>;
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
