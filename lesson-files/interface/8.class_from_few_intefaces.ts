interface ClassUser2 {
    name: string,
    age: number
}

interface Pass2 {
    createPass(): string
}

class JunJun3 implements ClassUser2, Pass2 {
    name: string = 'JunJun';
    age: number = 20;
    email: string = 'junjun@gmail.com';

    createPass() {
        return `${this.name}${this.age}`
    }
}