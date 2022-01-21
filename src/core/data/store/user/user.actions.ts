import { createAction } from '@reduxjs/toolkit';

import { User } from '../../../model/user.model';

export const AUTHENTICATE = {
    LOGIN: createAction('Logged in'),
    LOGOUT: {
        TRIGGER: createAction('Logged out'),
        COMPLETED: createAction('Logged out completed'),
    },
};

export const GET_USER_INFO = createAction<User>('[Get user info] completed');
