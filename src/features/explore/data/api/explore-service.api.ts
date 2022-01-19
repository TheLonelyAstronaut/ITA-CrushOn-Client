import { AxiosResponse } from "axios";

import { SetReactionData, SetReactionResponse } from "../../../../core/model/explore.model";
import { City, Passion, User } from "../../../../core/model/user.model";

export interface ExploreService {
    addReaction: (reaction: SetReactionData) => Promise<AxiosResponse<SetReactionResponse>>;
    explore: () => Promise<AxiosResponse<User[]>>;
    getCities: () => Promise<AxiosResponse<City[]>>;
    getPassions: () => Promise<AxiosResponse<Passion[]>>;
}