import { createAction } from '@reduxjs/toolkit';

import { City, Passion } from '../../../model/user.model';

export const GET_CITIES_DATA = {
    COMPLETED: createAction<City[]>('[Get cities data] completed'),
};

export const GET_PASSIONS_DATA = {
    COMPLETED: createAction<Passion[]>('[Get passions data] completed'),
};
