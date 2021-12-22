import { createAction } from "@reduxjs/toolkit";

import { ThemesEnum } from "../../../../app/presentation/themes/root.theme";


export const SET_THEME = {
    SET: createAction<ThemesEnum>('Theme is chosen'),
};

export const CLEAR_TOKEN = {
    TRIGGER: createAction('[Clear token] triggered'),
    STARTED: createAction('[Clear token] started'),
};