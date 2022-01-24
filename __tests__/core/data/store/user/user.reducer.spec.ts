import { AUTHENTICATE, GET_USER_INFO } from "../../../../../src/core/data/store/user/user.actions";
import { userReducer } from "../../../../../src/core/data/store/user/user.reducer";
import { User } from "../../../../../src/core/model/user.model";
import { SET_USER_INFO } from "../../../../../src/features/profile/data/store/edit-profile.actions";

describe('User reducer', () => {
    const initialState = {
        userInfo: undefined,
        isAuthenticated: false,
    };
    const userData: User = {
        username: 'alice21',
        id: 0,
        photo: {
            id: 1,
            link: 'https://i.pinimg.com/736x/37/20/b9/3720b959efd4051e2b6bfa443c1b6198.jpg',
        },
        name: 'Alice',
        dateOfBirth: 947898026419,
        gender: 'FEMALE',
        city: {
            id: 1,
            en: 'Minsk',
            ru: 'Минск',
            be: 'Мінск',
        },
        bio: '',
        passions: [],
    };
    const editUserData: User = {
        username: 'alice21',
        id: 0,
        photo: {
            id: 1,
            link: 'https://i.pinimg.com/736x/37/20/b9/3720b959efd4051e2b6bfa443c1b6198.jpg',
        },
        name: 'Alice',
        dateOfBirth: 947898026419,
        gender: 'FEMALE',
        city: {
            id: 1,
            en: 'Minsk',
            ru: 'Минск',
            be: 'Мінск',
        },
        bio: 'Hello-hello, I wanna date with you',
        passions: [],
    };

    describe(`'${GET_USER_INFO.type}'`, () => {
        it('should save user info', () => {
            const state = userReducer(initialState, GET_USER_INFO(userData));
            expect(state.userInfo).toEqual(userData);
        });
    });
    describe(`'${SET_USER_INFO.COMPLETED.type}'`, () => {
        it('should save new user info', () => {
            const state = userReducer(initialState, SET_USER_INFO.COMPLETED(editUserData));
            expect(state.userInfo).toEqual(editUserData);
        });
    });
    describe(`'${AUTHENTICATE.LOGIN.type}'`, () => {
        it('should set isAuthenticated to true', () => {
            const state = userReducer(initialState, AUTHENTICATE.LOGIN());
            expect(state.isAuthenticated).toBe(true);
        });
    });
    describe(`'${AUTHENTICATE.LOGOUT.COMPLETED.type}'`, () => {
        it('should set isAuthenticated to false', () => {
            const state = userReducer(initialState, AUTHENTICATE.LOGOUT.COMPLETED());
            expect(state.isAuthenticated).toBe(false);
        });
    });
});