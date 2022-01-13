import { AxiosResponse } from "axios";

import { AuthTokens } from "../../../../core/model/auth.model";
import { RegistrationUser } from "../../model/register-user.model";

export interface RegistrationService {
    register: (registrationData: RegistrationUser) => Promise<AxiosResponse<AuthTokens>>;
}
