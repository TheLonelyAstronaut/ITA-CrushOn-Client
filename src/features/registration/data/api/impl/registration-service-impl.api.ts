import {apiClient} from "../../../../../core/data/api/impl/api-client-impl.api";
import { APIClient } from "../../../../../core/data/api/api-client.api";
import { RegistrationService } from "../registration-service.api";


class RegistrationServiceImpl implements RegistrationService {
	constructor(private apiClient: APIClient) {}

	register(username: string, password: string): void {
		const result = apiClient.post<Boolean>({ username, password })
	}
}

export const registrationService: RegistrationService = new RegistrationServiceImpl(apiClient)
