import { AxiosResponse } from "axios";

import { SetReactionData, SetReactionResponse } from "../../../../core/model/explore.model";
import { City, Passion, User } from "../../../../core/model/user.model";

export interface CardsService {
    getCards: () => Promise<AxiosResponse<User[]>>;
    setReaction: (reactionData: SetReactionData) => Promise<AxiosResponse<SetReactionResponse>>
    getCities: () => Promise<AxiosResponse<City[]>>;
    getPassions: () => Promise<AxiosResponse<Passion[]>>;
}