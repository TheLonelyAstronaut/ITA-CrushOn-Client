import { createReducer } from "@reduxjs/toolkit";

import { REGISTER } from "./registration.actions";
import { RegistrationState } from "./registration.state";

const initialState: RegistrationState = {
    data: {
        email: '',
        password: '',
        name: '',
        gender: 'male',
        dateOfBirth: new Date,
        city: 7,
        photo: {
            uri: '',
            mime: '',
            width: 300,
            height: 400,
        },
    },
};

export const registrationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REGISTER.SET_EMAIL, (state, action) => {
            state.data.email = action.payload;
        })
        .addCase(REGISTER.SET_PASSWORD, (state, action) => {
            state.data.password = action.payload;
        })
        .addCase(REGISTER.SET_NAME, (state, action) => {
            state.data.name = action.payload;
        })
        .addCase(REGISTER.SET_GENDER, (state, action) => {
            state.data.gender = action.payload;
        })
        .addCase(REGISTER.SET_DATE, (state, action) => {
            state.data.dateOfBirth = action.payload;
        })
        .addCase(REGISTER.SET_CITY, (state, action) => {
            state.data.city = action.payload;
        })
        .addCase(REGISTER.SET_PHOTO, (state, action) => {
            state.data.photo = action.payload;
        });
});