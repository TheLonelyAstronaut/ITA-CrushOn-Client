import { AxiosResponse } from 'axios';

import { Match } from '../../model/match.model';

export type DiscoverService = {
    getMatches: () => Promise<AxiosResponse<Match>>;
};
