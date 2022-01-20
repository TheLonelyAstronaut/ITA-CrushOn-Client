import { AxiosResponse } from "axios";

import { coreAPIClient, CoreAPIClient } from "../../../../../core/data/api/core.api";
import { SetReactionData, SetReactionResponse } from "../../../../../core/model/explore.model";
import { City, Passion, User } from "../../../../../core/model/user.model";
import { CardsService } from "../cards-service.api";

class CardsServiceImpl implements CardsService {
    constructor(private coreAPI: CoreAPIClient) {}

    getCards = async (): Promise<AxiosResponse<User[]>> => {
        return this.coreAPI.get('api/v1/explore');
    }

    setReaction = async (reactionData: SetReactionData): Promise<AxiosResponse<SetReactionResponse>> => {
        return this.coreAPI.post<SetReactionResponse, SetReactionData>('api/v1/explore/react', reactionData);
    }
    
    getCities = async (): Promise<AxiosResponse<City[]>>=> {
        return this.coreAPI.get('api/v1/explore/cities');
    }

    getPassions = async (): Promise<AxiosResponse<Passion[]>> => {
        return this.coreAPI.get('api/v1/explore/passions');
    }
}

export const cardsService: CardsService = new CardsServiceImpl(coreAPIClient);