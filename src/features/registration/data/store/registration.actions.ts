import { createAction } from "@reduxjs/toolkit";

import { Photo } from "../../model/register-user.model";

export const REGISTER = {
    SET_EMAIL: createAction<string>('Email is added'),
    SET_PASSWORD: createAction<string>('Password is added'),
    SET_NAME: createAction<string>('Name is added'),
    SET_GENDER: createAction<'male' | 'female'>('Gender is added'),
    SET_DATE: createAction<Date>('Date of birth is added'),
    SET_CITY: createAction<number>('City is added'),
    SET_PHOTO: createAction<Photo>('Photo is added'),
    SEND_DATA: createAction('Registration data is filled, saga is triggered'),
};