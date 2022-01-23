import { AxiosResponse } from 'axios';

import { coreAPIClient, CoreAPIClient } from '../../../../../core/data/api/core.api';
import { SetReactionData, SetReactionResponse } from '../../../../../core/model/explore.model';
import { City, Passion, User } from '../../../../../core/model/user.model';
import { HTTPResponse } from '../../../../../core/util/http-utils.util';
import { CardsService } from '../cards-service.api';

class CardsServiceImpl implements CardsService {
    constructor(private coreAPI: CoreAPIClient) {}

    getCards = async (): Promise<HTTPResponse<User[]>> => {
        return this.coreAPI.get('/api/v1/explore');
    };

    setReaction = async (reactionData: SetReactionData): Promise<HTTPResponse<SetReactionResponse>> => {
        return this.coreAPI.post<SetReactionResponse, SetReactionData>('/api/v1/explore/react', reactionData);
    };

    getCities = async (): Promise<HTTPResponse<City[]>> => {
        return this.coreAPI.get('/api/v1/explore/cities');
    };

    getPassions = async (): Promise<HTTPResponse<Passion[]>> => {
        return this.coreAPI.get('/api/v1/explore/passions');
    };
}

export const cardsService: CardsService = new CardsServiceImpl(coreAPIClient);
