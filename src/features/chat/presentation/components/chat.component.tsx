/* eslint-disable react-native/no-color-literals */
import React, { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, Text } from 'react-native';
import { GiftedChat, Bubble, BubbleProps, Time, TimeProps, InputToolbar, InputToolbarProps, Composer, ComposerProps } from 'react-native-gifted-chat';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTheme } from 'styled-components';

import { SafeArea } from '../../../../core/presentation/components/container/safe-area-themed.styled';
import { CardsData } from '../../../../mocks/cards.data';
import { Messages } from '../../../../mocks/messages.data';
import { ChatScreenNavigationProp, ChatScreenRouteProp } from '../navigation/routing.types';

export type ChatScreenProps = {
    navigation: ChatScreenNavigationProp;
    route: ChatScreenRouteProp;
};

export const ChatScreen: React.FC<ChatScreenProps> = (props: ChatScreenProps) => {
    const user = CardsData.find(user => { if (user.id === props.route.params.id) return true});
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
                    _id: props.route.params.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 2,
                text: 'Good luck',
                createdAt: new Date(),
                user: {
                    _id: props.route.params.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 1,
                text: 'Hello developer',
                createdAt: new Date(),
                user: {
                    _id: props.route.params.id,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },
            {
                _id: 0,
                text: 'This is a system message',
                createdAt: new Date(Date.UTC(2016, 5, 11, 17, 20, 0)),
                system: true,
            }
        ])
    }, [])

    const renderTime = (props: TimeProps) => {
        return (
            <Time 
                {...props}
                timeTextStyle={{
                    right: {
                        color: theme.colors.componentLabel,
                        fontSize: theme.fontSize.extraSmall,
                    },
                    left: {
                        color: theme.colors.componentLabel,
                        fontSize: theme.fontSize.extraSmall,
                    }
                }}
                containerStyle={{
                    right: {
                        flex: 1,
                        alignItems: 'flex-end'
                    },
                    left: {
                        flex: 1,
                        alignItems: 'flex-end'
                    }
                }}
            />
        );
    };

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
                textStyle={{
                    right: {
                        color: theme.colors.text,
                        fontSize: theme.fontSize.medium,
                    },
                    left: {
                        color: theme.colors.text,
                        fontSize: theme.fontSize.medium,
                    }
                }}
            />
        );
    };

    const renderComposer = (props: ComposerProps) => (
        <Composer
            {...props}
            placeholderTextColor={theme.colors.componentLabel}
            placeholder={t('common.placeholder')}
            textInputStyle={{
                paddingTop: 3,
                paddingBottom: 4,
                paddingHorizontal: theme.spacer,
                color: '#222B45',
                backgroundColor: theme.colors.background,
                borderRadius: theme.spacer,
            }}
        />
    );

    const renderInputToolbar = (props: InputToolbarProps) => (
        <InputToolbar
          {...props}
          containerStyle={{
            backgroundColor: theme.colors.component,
            borderRadius: theme.borderRadius.small,
            marginHorizontal: theme.spacer,
            marginBottom: insets.bottom ? 0 : theme.spacer,
            
          }}
          primaryStyle={{ alignItems: 'center', justifyContent: 'center'}}
        />
    );

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
        console.log(messages);
    }, [])

    return (
        <SafeArea>
            <Pressable onPress={ () => props.navigation.goBack() } >
                <Text
                    style={{
                        fontSize: theme.fontSize.medium,
                        color: theme.colors.componentLabel,
                        paddingLeft: theme.spacer,
                    }}
                >Back</Text>
            </Pressable>
            <GiftedChat 
                messages={messages}
                alwaysShowSend={true}
                onSend={messages => onSend(messages)}
                user={{
                  _id: 1010,
                }}
                renderComposer={renderComposer}
                renderInputToolbar={renderInputToolbar}
                renderBubble={renderBubble}
                renderTime={renderTime}
            />
        </SafeArea>
    );
};
