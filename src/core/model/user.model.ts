export type User = {
    id: number;
    imgUrl: string;
    name: string;
    age: string;
    lives: string;
    location: number;
    bio: string;
    passions: string[];
} 

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