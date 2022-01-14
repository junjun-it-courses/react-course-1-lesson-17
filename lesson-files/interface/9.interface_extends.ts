interface ClassUser4 {
    name: string,
    age: number
}

interface Pass4 extends ClassUser4{
    createPass(): string
}

class JunJun4 implements Pass4 {
    name: string = 'JunJun';
    age: number = 20;
    email: string = 'junjun@gmail.com';

    createPass() {
        return `${this.name}${this.age}`
    }
}