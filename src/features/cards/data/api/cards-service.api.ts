import { AxiosResponse } from "axios";

import { SetReactionData, SetReactionResponse } from "../../../../core/model/explore.model";
import { User } from "../../../../core/model/user.model";

export interface CardsService {
    getCards: () => Promise<AxiosResponse<User[]>>;
    setReaction: (reactionData: SetReactionData) => Promise<AxiosResponse<SetReactionResponse>>
}