import { AxiosResponse } from 'axios';

import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { Match } from '../../../model/match.model';
import { DiscoverService } from '../discover-service.api';

export class DiscoverServiceImpl implements DiscoverService {
    private coreAPI: CoreAPIClient;

    constructor(core: CoreAPIClient) {
        this.coreAPI = core;
    }

    getMatches = async (): Promise<AxiosResponse<Match>> => {
        return this.coreAPI.get('/api/v1/user/matches');
    };
}

export const discoverService = new DiscoverServiceImpl(coreAPIClient);
