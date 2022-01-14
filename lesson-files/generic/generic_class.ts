class Dog {
    constructor(public name: string, public age: number) {}

    public getVoice(): string {
        return 'Bark Bark'
    }
}

class Cat<Type> {

    constructor(public name: Type, public age: Type) {}

    public getVoice(): string {
        return 'Meov Meov'
    }
}

const puppy = new Cat('Vladimir', '24');
const kitty = new Cat(100, 24);

puppy.getVoice();
kitty.getVoice();


class Cow<Type1, Type2 extends number> {

    constructor(public name: Type1, public age: Type2) {}

    public getVoice(): string {
        return 'Moo Moo'
    }

    getAgeInMonths(): number {
        // const localAge: number = Number(this.age)
        // return localAge * 12;

        return this.age  * 12
    }
}

const cowMaleChild = new Cow('Vladimir', 20);
const cowFemaleChild = new Cow<string, number>('Vladimir', 25);

cowMaleChild.getVoice()
cowMaleChild.getAgeInMonths()

cowFemaleChild.getVoice()
cowFemaleChild.getAgeInMonths()