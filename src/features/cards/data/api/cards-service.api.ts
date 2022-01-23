import { SetReactionData, SetReactionResponse } from '../../../../core/model/explore.model';
import { City, Passion, User } from '../../../../core/model/user.model';
import { HTTPResponse } from '../../../../core/util/http-utils.util';

export interface CardsService {
    getCards: () => Promise<HTTPResponse<User[]>>;
    setReaction: (reactionData: SetReactionData) => Promise<HTTPResponse<SetReactionResponse>>;
    getCities: () => Promise<HTTPResponse<City[]>>;
    getPassions: () => Promise<HTTPResponse<Passion[]>>;
}
