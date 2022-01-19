import { AxiosResponse } from "axios";

import { coreAPIClient, CoreAPIClient } from "../../../../../core/data/api/core.api";
import { SetReactionData, SetReactionResponse } from "../../../../../core/model/explore.model";
import { City, Passion, User } from "../../../../../core/model/user.model";
import { ExploreService } from "../explore-service.api";

class ExploreServiceImpl implements ExploreService {
    constructor(private coreAPI: CoreAPIClient) {}

    addReaction = async (reaction: SetReactionData) => {
        return this.coreAPI.post<SetReactionResponse, SetReactionData>('api/v1/explore/react', reaction);
    }

    explore = async (): Promise<AxiosResponse<User[]>> => {
        return this.coreAPI.get('api/v1/explore');
    }

    getCities = async (): Promise<AxiosResponse<City[]>>=> {
        return this.coreAPI.get('api/v1/explore/cities');
    }

    getPassions = async (): Promise<AxiosResponse<Passion[]>> => {
        return this.coreAPI.get('api/v1/explore/passions');
    }
}

export const exploreService: ExploreService = new ExploreServiceImpl(coreAPIClient);