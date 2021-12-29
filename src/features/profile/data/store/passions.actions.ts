import { createAction } from "@reduxjs/toolkit";

export const SET_PASSIONS = {
    TRIGGER: createAction<string[]>('[Set passions] triggered'),
    STARTED: createAction('[Set passions] started'),
    COMPLETED: createAction<string[]>('[Set passions] completed'),
};