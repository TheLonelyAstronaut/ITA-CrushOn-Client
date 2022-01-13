import { createReducer } from "@reduxjs/toolkit";

import { RegistrationUser } from "../../model/register-user.model";

import { REGISTRATION } from "./registration.actions";
import { RegistrationState } from "./registration.state";

const initialState: RegistrationState = {
    registrationData: undefined,
};

export const registrationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(REGISTRATION.SET_USERNAME, (state, action) => {
            state.registrationData = {
                ...state.registrationData,
                username: action.payload,
            } as RegistrationUser;
        })
        .addCase(REGISTRATION.SET_PASSWORD, (state, action) => {
            state.registrationData = {
                ...state.registrationData,
                password: action.payload,
            } as RegistrationUser;
        })
        .addCase(REGISTRATION.SET_NAME, (state, action) => {
            state.registrationData = {
                ...state.registrationData,
                name: action.payload,
            } as RegistrationUser;
        })
        .addCase(REGISTRATION.SET_GENDER, (state, action) => {
            state.registrationData = {
                ...state.registrationData,
                gender: action.payload,
            } as RegistrationUser;
        })
        .addCase(REGISTRATION.SET_DATE, (state, action) => {
            state.registrationData = {
                ...state.registrationData,
                dateOfBirth: action.payload,
            } as RegistrationUser;
        });
});