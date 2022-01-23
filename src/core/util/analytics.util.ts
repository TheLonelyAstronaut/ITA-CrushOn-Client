import RNAnalytics from '@react-native-firebase/analytics';

import { logger } from './logger.util';

export class Analytics {
    log = async (eventName: string, data: Record<string, string>): Promise<void> => {
        return RNAnalytics().logEvent(eventName, data).catch(logger.error);
    };
}

export const analytics = new Analytics();

export const EVENTS_LIST = {
    LOGIN: 'login',
    GET_MATCHES: 'get_matches',
    GET_CARDS: 'get_cards',
    SET_REACTION: 'set_reaction',
    LOGOUT: 'logout',
    LAUNCH: 'launch',
    REGISTER: 'sign_up',
    UPDATE_INFO: 'update_info',
};
