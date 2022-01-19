import { User } from "./user.model"

export enum Reaction {
    LIKE,
    DISLIKE,
}

export type SetReaction = {
    userId: number;
    reaction: Reaction;
}

export type SetReactionData = {
    userId: number;
    reaction: 'like' | 'dislike';
}

export type SetReactionResponse = {
    isMatch: boolean;
    target: User;
}

// export type ExploreData = {
//     pageSize: number;
//     pageNumber: number;
// }