import { createAction } from "@reduxjs/toolkit";

import { User } from "../../../model/user.model";

import { AuthData } from "./user.state";

export const GET_TOKEN = {
    TRIGGER: createAction<AuthData>('[Get token] triggered'),
    STARTED: createAction('[Get token] started'),
    COMPLETED: createAction<string>('[Get token] completed'),
};

export const CLEAR_TOKEN = {
    TRIGGER: createAction<string>('[Clear token] triggered'),
    STARTED: createAction('[Clear token] started'),
    COMPLETED: createAction('[Clear token] completed'),
};

export const GET_USER = {
    TRIGGER: createAction<string>('[Get user] triggered'),
    STARTED: createAction('[Get user] started'),
    COMPLETED: createAction<User>('[Get user] completed'),
};