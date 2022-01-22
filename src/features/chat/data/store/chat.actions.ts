import { createAction } from '@reduxjs/toolkit';

export const SET_IS_LOADING = createAction<boolean>('[Set isLoading]');

export const GET_CHATS = createAction('[Get chats] triggered');
export const GET_MESSAGES = createAction<number>('[Get messages] triggered');
export const OPEN_PROFILE_FROM_CHAT = createAction<number>('[Open profile from chat]');
export const SEND_MESSAGE = createAction<{ chatId: number; message: string }>('[Send message]');
