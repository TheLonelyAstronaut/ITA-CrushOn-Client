import { createAction } from "@reduxjs/toolkit";

import { SetReaction } from "../../../../core/model/explore.model";
import { User } from "../../../../core/model/user.model";

export const GET_CARDS = {
    STARTED: createAction('[Get cards] started'),
    COMPLETED: createAction<User[]>('[Get cards] completed'),
};

export const SET_REACTION = {
    STARTED: createAction<SetReaction>('[Set reaction] started'),
};