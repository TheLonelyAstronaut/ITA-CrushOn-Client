import { createReducer } from "@reduxjs/toolkit";

import { SET_IS_LOADING } from "./chat.actions";
import { ChatState } from "./chat.state";

const initialState: ChatState = {
    isLoading: true,
};

export const chatReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(SET_IS_LOADING, (state, action) => {
            state.isLoading = action.payload;
        });
})