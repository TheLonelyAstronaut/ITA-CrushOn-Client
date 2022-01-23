import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { AuthTokens } from '../../../../../core/model/auth.model';
import { HTTPResponse } from '../../../../../core/util/http-utils.util';
import { RegistrationUser } from '../../../model/register-user.model';
import { RegistrationService } from '../registration-service.api';

class RegistrationServiceImpl implements RegistrationService {
    constructor(private coreAPI: CoreAPIClient) {}

    register = async (registrationData: RegistrationUser): Promise<HTTPResponse<AuthTokens>> => {
        return this.coreAPI.post<AuthTokens, RegistrationUser>('/api/v1/auth/register', registrationData);
    };
}

export const registrationService: RegistrationService = new RegistrationServiceImpl(coreAPIClient);
