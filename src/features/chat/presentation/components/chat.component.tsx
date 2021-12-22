import { useNavigation } from '@react-navigation/core';
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';
import {
    GiftedChat,
    Bubble,
    BubbleProps,
    Time,
    TimeProps,
    InputToolbar,
    InputToolbarProps,
    Composer,
    ComposerProps,
    MessageText,
    MessageTextProps,
    SendProps,
    Send,
} from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import { SendSVG } from '../../../../assets/components/send-icon.component';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { Messages } from '../../../../mocks/messages.data';
import { ChatScreenNavigationProp, ChatScreenRouteProp } from '../navigation/routing.types';

import { ChatHeader } from './chat-header.component';
import { Avatar } from './styled/avatar-image.styled';

export type ChatScreenProps = {
    navigation: ChatScreenNavigationProp;
    route: ChatScreenRouteProp;
};

export const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const navigation = useNavigation();
    const { t } = useTranslation();
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const [messages, setMessages] = useState(Messages);

    useEffect(() => {
        setMessages([
            {
                _id: 3,
                text: 'Have fun',
                createdAt: new Date(),
                user: {
                    _id: props.route.params.user.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Good luck',
                createdAt: new Date(),
                user: {
                    _id: props.route.params.user.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: props.route.params.user.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 0,
                text: 'This is a system message',
                createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                system: true,
            },
        ]);
    }, [props.route.params]);

    const renderTime = (props: TimeProps) => {
        return (
            <Time
                {...props}
                position="right"
                timeTextStyle={{
                    right: {
                        color: theme.colors.componentLabel,
                        fontSize: theme.fontSize.extraSmall,
                    },
                    left: {
                        color: theme.colors.componentLabel,
                        fontSize: theme.fontSize.extraSmall,
                    },
                }}
                containerStyle={{
                    right: {
                        flex: 1,
                        alignItems: 'flex-end',
                    },
                    left: {
                        flex: 1,
                        alignItems: 'flex-end',
                    },
                }}
            />
        );
    };

    const renderAvatar = () => {
        return <Avatar source={{ uri: props.route.params.user.imgUrl }} />;
    };

    const expandCard = useCallback(() => {
        navigation.navigate('ExpandedCard', {
            user: props.route.params.user,
        })},
        [navigation, props.route.params]
    );

    const renderBubble = (props: BubbleProps) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: theme.colors.component,
                    },
                    left: {
                        backgroundColor: theme.colors.background,
                        borderWidth: 1,
                        borderColor: theme.colors.componentLabel,
                    },
                }}
            />
        );
    };

    const renderMessageText = (props: MessageTextProps) => (
        <MessageText
            {...props}
            textStyle={{
                right: {
                    color: theme.colors.text,
                    fontSize: theme.fontSize.medium,
                },
                left: {
                    color: theme.colors.text,
                    fontSize: theme.fontSize.medium,
                },
            }}
        />
    );
    const renderComposer = (props: ComposerProps) => (
        <Composer
            {...props}
            placeholderTextColor={theme.colors.componentLabel}
            placeholder={t('common.placeholder')}
            textInputStyle={{
                marginRight: theme.spacer,
                marginLeft: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingTop: 3,
                paddingBottom: 4,
                paddingHorizontal: theme.spacer,
                color: theme.colors.text,
                backgroundColor: theme.colors.background,
                borderRadius: theme.borderRadius.small,
            }}
        />
    );

    const renderSend = (props: SendProps) => (
        <Send {...props} disabled={!props.text} containerStyle={{ alignItems: 'center', justifyContent: 'center' }}>
            <SendSVG color={theme.colors.componentLabel} />
        </Send>
    );

    const renderInputToolbar = (props: InputToolbarProps) => (
        <InputToolbar
            {...props}
            containerStyle={{
                height: theme.composerHeight + theme.spacer * 2,
                borderTopWidth: 0,
                backgroundColor: theme.colors.component,
                paddingHorizontal: theme.spacer,
                paddingVertical: theme.spacer / 2,
                justifyContent: 'center',
            }}
            primaryStyle={{ alignItems: 'center', justifyContent: 'center' }}
        />
    );

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
        console.log(messages);
    }, []);

    return (
        <SafeArea edges={['top']}>
            <ChatHeader
                goBack={() => props.navigation.goBack()}
                user={props.route.params.user}
                expandCard={expandCard}
            />
            <GiftedChat
                messages={messages}
                alwaysShowSend={true}
                onSend={(messages) => onSend(messages)}
                bottomOffset={insets.bottom ? insets.bottom : -theme.spacer}
                user={{
                    _id: 1010,
                }}
                minComposerHeight={theme.composerHeight}
                minInputToolbarHeight={theme.composerHeight + theme.spacer * 2}
                renderComposer={renderComposer}
                renderInputToolbar={renderInputToolbar}
                renderSend={renderSend}
                renderAvatar={renderAvatar}
                renderBubble={renderBubble}
                renderMessageText={renderMessageText}
                renderTime={renderTime}
            />
            <View style={{ backgroundColor: theme.colors.component, height: insets.bottom }} />
        </SafeArea>
    );
};
