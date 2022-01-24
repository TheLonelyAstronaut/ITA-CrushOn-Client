import { ApplicationState } from '../../../../../src/app/data/store/types';
import { getCards, getCardsState, getIsCardsLoading, getIsEndReached } from '../../../../../src/features/cards/data/store/cards.selectors'
import { CardsState } from '../../../../../src/features/cards/data/store/cards.state';

describe('Cards selectors', () => {
    const state: ApplicationState = {
        cards: {
            cards: [],
            isLoading: true,
            isEndReached: false,
        } as CardsState,
    } as ApplicationState;

    describe('getCardsState', () => {
        it('should return cardsState', () => {
            const cardsState = getCardsState(state);
            expect(cardsState).toBe(state.cards);
        })
    });
    describe('getCards', () => {
        it('should return cards', () => {
            const cards = getCards(state);
            expect(cards).toBe(state.cards.cards);
        })
    });
    describe('getIsCardsLoading', () => {
        it('should return isLoading', () => {
            const isLoading = getIsCardsLoading(state);
            expect(isLoading).toBe(state.cards.isLoading);
        })
    });
    describe('getIsEndReached', () => {
        it('should return isEndReached', () => {
            const isEndReached = getIsEndReached(state);
            expect(isEndReached).toBe(state.cards.isEndReached);
        })
    });
})