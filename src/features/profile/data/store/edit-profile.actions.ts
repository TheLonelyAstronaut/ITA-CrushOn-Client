import { createAction } from "@reduxjs/toolkit";

export const SET_BIO = {
    TRIGGER: createAction<string>('[Set bio] triggered'),
    STARTED: createAction('[Set bio] started'),
    COMPLETED: createAction<string>('[Set bio] completed'),
};