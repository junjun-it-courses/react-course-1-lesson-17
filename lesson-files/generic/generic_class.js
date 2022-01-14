var Dog = /** @class */ (function () {
    function Dog(name, age) {
        this.name = name;
        this.age = age;
    }
    Dog.prototype.getVoice = function () {
        return 'Bark Bark';
    };
    return Dog;
}());
var Cat = /** @class */ (function () {
    function Cat(name, age) {
        this.name = name;
        this.age = age;
    }
    Cat.prototype.getVoice = function () {
        return 'Meov Meov';
    };
    return Cat;
}());
var puppy = new Cat('Vladimir', '24');
var kitty = new Cat(100, 24);
puppy.getVoice();
kitty.getVoice();
var Cow = /** @class */ (function () {
    function Cow(name, age) {
        this.name = name;
        this.age = age;
    }
    Cow.prototype.getVoice = function () {
        return 'Moo Moo';
    };
    Cow.prototype.getAgeInMonths = function () {
        // const localAge: number = Number(this.age)
        // return localAge * 12;
        return this.age * 12;
    };
    return Cow;
}());
var cowMaleChild = new Cow('Vladimir', 20);
var cowFemaleChild = new Cow('Vladimir', 25);
cowMaleChild.getVoice();
cowMaleChild.getAgeInMonths();
cowFemaleChild.getVoice();
cowFemaleChild.getAgeInMonths();
//# sourceMappingURL=generic_class.js.map