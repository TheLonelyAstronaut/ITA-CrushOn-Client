import { createReducer } from "@reduxjs/toolkit";

import { SET_USER_INFO } from "../../../../features/profile/data/store/edit-profile.actions";

import { AUTHENTICATE, GET_USER_INFO } from "./user.actions";
import { UserState } from "./user.state";

const initialState: UserState = {
    userInfo: undefined,
    isAuthenticated: false,
};

export const userReducer = createReducer<UserState>(initialState, (builder) => {
    builder
        .addCase(GET_USER_INFO, (state, action) => {
            state.userInfo = action.payload;
        })
        .addCase(SET_USER_INFO.COMPLETED, (state, action) => {
            state.userInfo = action.payload;
        })
        .addCase(AUTHENTICATE.LOGIN, (state) => {
            state.isAuthenticated = true;
        })
        .addCase(AUTHENTICATE.LOGOUT.COMPLETED, (state) => {
            state.isAuthenticated = false;
        });
});