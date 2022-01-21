import { AxiosResponse } from 'axios';

import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { AuthTokens } from '../../../../../core/model/auth.model';
import { RegistrationUser } from '../../../model/register-user.model';
import { RegistrationService } from '../registration-service.api';

class RegistrationServiceImpl implements RegistrationService {
    constructor(private coreAPI: CoreAPIClient) {}

    register = async (registrationData: RegistrationUser): Promise<AxiosResponse<AuthTokens>> => {
        return this.coreAPI.post<AuthTokens, RegistrationUser>('api/v1/auth/register', registrationData);
    };
}

export const registrationService: RegistrationService = new RegistrationServiceImpl(coreAPIClient);
