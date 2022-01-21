import { createAction } from '@reduxjs/toolkit';

import { User } from '../../../../core/model/user.model';

export const GET_MATCHES = {
    TRIGGER: createAction('[Get Matches] trigger'),
    STARTED: createAction('[Get Matches] started'),
    COMPLETED: createAction<User[]>('[Get Matches] completed'),
};
