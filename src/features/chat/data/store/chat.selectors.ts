import { createSelector, Selector } from "reselect";

import { ApplicationState } from "../../../../app/data/store/types";

import { ChatState } from "./chat.state";

export const getChatState: Selector<ApplicationState, ChatState> = createSelector(
    (state: ApplicationState) => state, 
    (state) => state.chat,
);

export const getChatIsLoading: Selector<ApplicationState, boolean> = createSelector(
    getChatState,
    (state) => state.isLoading,
);