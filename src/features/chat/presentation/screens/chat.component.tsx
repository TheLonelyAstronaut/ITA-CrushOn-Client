import withObservables from '@nozbe/with-observables';
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
    IMessage,
} from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import { useTheme } from 'styled-components';

import { SendSVG } from '../../../../assets/components/send-icon.component';
import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { Messages } from '../../../../mocks/messages.data';
import { Chat } from '../../data/database/model/chat.model';
import { GET_MESSAGES, OPEN_PROFILE_FROM_CHAT, SEND_MESSAGE } from '../../data/store/chat.actions';
import { ChatHeader } from '../components/chat-header.component';
import { Avatar } from '../components/styled/avatar-image.styled';
import { ChatScreenNavigationProp, ChatScreenRouteProp } from '../navigation/routing.types';

export type ChatScreenProps = {
    navigation: ChatScreenNavigationProp;
    route: ChatScreenRouteProp;
    chat: Chat;
};

export const RawChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const { t } = useTranslation();
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    const [messages] = useState(Messages);

    useEffect(() => {
        dispatch(GET_MESSAGES(props.route.params.chat.chatId));
    }, [dispatch, props.route.params]);

    const renderTime = (props: TimeProps<IMessage>) => {
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
        return <Avatar source={{ uri: props.route.params.user.photo }} />;
    };

    const expandCard = useCallback(() => {
        dispatch(OPEN_PROFILE_FROM_CHAT(props.route.params.user.userId));
    }, [dispatch, props.route]);

    const renderBubble = (props: BubbleProps<IMessage>) => {
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

    const renderMessageText = (props: MessageTextProps<IMessage>) => (
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

    const renderSend = (props: SendProps<IMessage>) => (
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

    const onSend = useCallback(
        (messages: IMessage[]) => {
            messages.forEach((message) => dispatch(SEND_MESSAGE({ chatId: props.chat.chatId, message: message.text })));
        },
        [dispatch, props.chat]
    );

    return (
        <SafeArea edges={['top']}>
            <ChatHeader
                user={props.route.params.user}
                goBack={() => props.navigation.goBack()}
                expandCard={expandCard}
            />
            <GiftedChat
                messages={messages}
                alwaysShowSend={true}
                onSend={onSend}
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

export const ChatScreen = withObservables(['route'], ({ route }) => ({
    chat: route.params.chat.observe(),
}))(RawChatScreen);
