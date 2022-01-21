import { createAction } from '@reduxjs/toolkit';

import { PhotoPicker } from '../../../../core/util/upload.util';
import { RegistrationUser } from '../../model/register-user.model';

export const REGISTRATION = {
    SET_USERNAME: createAction<string>('Email is added'),
    SET_PASSWORD: createAction<string>('Password is added'),
    SET_NAME: createAction<string>('Name is added'),
    SET_GENDER: createAction<'male' | 'female'>('Gender is added'),
    SET_DATE: createAction<number>('Date of birth is added'),
    SET_PHOTO: createAction<PhotoPicker>('Photo is added'),
    SEND_REGISTRATION_DATA: createAction<RegistrationUser>('Registration data is filled, saga is triggered'),
};
