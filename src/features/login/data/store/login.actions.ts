import { createAction } from "@reduxjs/toolkit";

import { AuthData } from "../../../../core/model/auth.model";

export const LOGIN = {
    TRIGGER: createAction<AuthData>('[Login] triggered'),
};