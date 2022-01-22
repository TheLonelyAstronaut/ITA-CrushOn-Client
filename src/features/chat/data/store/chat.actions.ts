import { createAction } from "@reduxjs/toolkit";

export const SET_IS_LOADING = createAction<boolean>('[Set isLoading]');

export const GET_CHATS = createAction('[Get chats] triggered');
