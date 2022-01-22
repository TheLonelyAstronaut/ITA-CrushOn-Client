import { Locale } from '../util/resolve-localized-string.util';

export type User = {
    username: string;
    id: number;
    photo: Photo;
    name: string;
    gender: 'MALE' | 'FEMALE';
    dateOfBirth: number;
    city: City;
    bio: string | undefined;
    passions: Passion[] | undefined;
};

export type Photo = {
    id: number;
    link: string;
};

export type Passion = Locale & {
    id: number;
};

export type City = Locale & {
    id: number;
};
