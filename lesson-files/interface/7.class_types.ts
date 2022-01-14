interface ClassUser {
    name: string,
    age: number,
    createPass(): string
}

class JunJun implements ClassUser {
    name: string = 'JunJun';
    age: number = 20;
    email: string = 'junjun@gmail.com';

    createPass() {
        return `${this.name}${this.age}`
    }
}