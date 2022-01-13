export type User = {
    username: string;
    id: number;
    photo: Photo;
    name: string;
    gender: 'male' | 'female';
    dateOfBirth: number;
    city: City;
    bio: string | undefined;
    passions: Passion[] | undefined;
};

export type Photo = {
    id: number;
    link: string;
}

export type Passion = {
    id: number;
    description: string;
}

export type City = {
    id: number;
    name: string;
};

/*const calculateSum = (a: number, b: number) => {
    return a + b;
}

calculateSum(123, 32);

const iterate = (data: Iterable<any>) => {
    while(data.hasNext()) {
        console.log(data.next())
    }
}

type Iterable<T> = {
    next(): T;
    hasNext(): boolean;
    add(data: T): void;
}

class CustomArray<T> implements Iterable<T> {
    private data: Array<T>
    private count = -1

    constructor() {
        this.data = []
    }

    next(): T {
        return this.data[++this.count]
    }

    hasNext(): boolean {
        return !(this.count >= this.data.length - 1)
    }

    add(data: T): void {
        this.data.push(data)
    }
}

const custom = new CustomArray<number>()
custom.add(123)

iterate(custom)
*/
