import { MMKV as RNMMKV } from 'react-native-mmkv';
import { Storage } from 'redux-persist';

class MMKV {
    private storage: RNMMKV = new RNMMKV();
    private reduxPersistAdapter: Storage = {
        setItem: (key, value) => {
            this.storage.set(key, value);
            return Promise.resolve(true);
        },
        getItem: (key) => {
            const value = this.storage.getString(key);
            return Promise.resolve(value);
        },
        removeItem: (key) => {
            this.storage.delete(key);
            return Promise.resolve();
        },
    };

    getReduxPersistAdapter = () => this.reduxPersistAdapter;
}

export const mmkv = new MMKV();
