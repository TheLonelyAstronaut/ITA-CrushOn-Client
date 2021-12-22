export type Photo = {
    uri: string;
    width: number;
    height: number;
    mime: string;
};

export type RegisterUser = {
    email: string;
    password: string;
    name: string;
    gender: 'male' | 'female';
    dateOfBirth: Date;
    city: number;
    photo: Photo;
};