import { createAction } from '@reduxjs/toolkit';

import { SetReaction } from '../../../../core/model/explore.model';
import { User } from '../../../../core/model/user.model';

export const GET_CARDS = {
    TRIGGER: createAction('[Get cards] trigger'),
    STARTED: createAction('[Get cards] started'),
    COMPLETED: createAction<User[]>('[Get cards] completed'),
    RESET: createAction<User[]>('[Get cards] reset'),
};

export const SET_REACTION = {
    STARTED: createAction<SetReaction>('[Set reaction] started'),
    COMPLETED: createAction('[Set reaction] completed'),
};
