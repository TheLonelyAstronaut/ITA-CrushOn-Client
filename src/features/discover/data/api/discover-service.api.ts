import { HTTPResponse } from '../../../../core/util/http-utils.util';
import { Match } from '../../model/match.model';

export type DiscoverService = {
    getMatches: () => Promise<HTTPResponse<Match>>;
};
