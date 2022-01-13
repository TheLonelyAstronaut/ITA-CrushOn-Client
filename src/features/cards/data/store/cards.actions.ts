import { createAction } from "@reduxjs/toolkit";

import { User } from "../../../../core/model/user.model";

export const GET_CARDS = {
    TRIGGER: createAction<number>('[Get cards] triggered'),
    STARTED: createAction('[Get cards] started'),
    COMPLETED: createAction<User[]>('[Get cards] completed'),
};

export const SET_REACTION = {
    
};