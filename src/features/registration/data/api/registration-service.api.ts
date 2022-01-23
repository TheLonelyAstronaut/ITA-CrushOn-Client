import { AuthTokens } from '../../../../core/model/auth.model';
import { HTTPResponse } from '../../../../core/util/http-utils.util';
import { RegistrationUser } from '../../model/register-user.model';

export interface RegistrationService {
    register: (registrationData: RegistrationUser) => Promise<HTTPResponse<AuthTokens>>;
}
