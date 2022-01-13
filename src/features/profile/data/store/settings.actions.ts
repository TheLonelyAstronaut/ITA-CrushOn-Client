import { createAction } from "@reduxjs/toolkit";

import { ThemesEnum } from "../../../../app/presentation/themes/root.theme";
import { City, Passion } from "../../../../core/model/user.model";


export const SET_THEME = {
    SET: createAction<ThemesEnum>('Theme is chosen'),
};

export const GET_CITIES_DATA = {
    COMPLETED: createAction<City[]>('[Get cities] completed'),
};

export const GET_PASSIONS_DATA = {
    COMPLETED: createAction<Passion[]>('[Get passions] completed'),
};