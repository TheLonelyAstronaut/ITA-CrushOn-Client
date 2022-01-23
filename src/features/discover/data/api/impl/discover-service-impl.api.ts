import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { HTTPResponse } from '../../../../../core/util/http-utils.util';
import { Match } from '../../../model/match.model';
import { DiscoverService } from '../discover-service.api';

export class DiscoverServiceImpl implements DiscoverService {
    private coreAPI: CoreAPIClient;

    constructor(core: CoreAPIClient) {
        this.coreAPI = core;
    }

    getMatches = async (): Promise<HTTPResponse<Match>> => {
        return this.coreAPI.get('/api/v1/user/matches');
    };
}

export const discoverService = new DiscoverServiceImpl(coreAPIClient);
