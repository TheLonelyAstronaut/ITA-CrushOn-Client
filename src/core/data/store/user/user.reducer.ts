import { createReducer } from "@reduxjs/toolkit";

import { SET_BIO } from "../../../../features/profile/data/store/edit-profile.actions";
import { SET_PASSIONS } from "../../../../features/profile/data/store/passions.actions";

import { CLEAR_TOKEN, GET_TOKEN, GET_USER } from "./user.actions";
import { UserState } from "./user.state";

const initialState: UserState = {
    user: {
        id: 123,
        name: 'abc',
        age: 123,
        imgUrl: 'https://yt3.ggpht.com/YXesX1-BuQmClDrybWgDnTthrtdD5BjkniOC83HXZZgNBNMNbv1jF50su3DIHrNaLTWWxPBxag=s900-c-k-c0x00ffffff-no-rj',
        lives: 'asdf',
        location: 123,
        passions: [
            'asdf',
            'adsf',
        ],
        bio: `asdf asdf asdf asdf asdf`,
    },
    token: '',
};

export const userReducer = createReducer<UserState>(initialState, (builder) => {
    builder
        .addCase(GET_TOKEN.COMPLETED, (state, action) => {
            state.token = action.payload;
        })
        .addCase(GET_USER.COMPLETED, (state, action) => {
            state.user = action.payload;
        })
        .addCase(SET_PASSIONS.COMPLETED, (state, action) => {
            state.user.passions = action.payload;
        })
        .addCase(SET_BIO.COMPLETED, (state, action) => {
            state.user.bio = action.payload;
        })
        .addCase(CLEAR_TOKEN.COMPLETED, (state) => {
            state.token = '';
        });
});