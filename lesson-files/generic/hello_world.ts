// Без дженериков нам нужно было бы передавать определенный тип

function helloWorld(arg: number): number {
    return arg;
}


// Также мы можем описать эту функцию через тип any
function helloWorld2(arg: any): any {
    return arg;
}

// Дженерик тип
function helloWorld3<Type>(arg: Type): Type {
    return arg;
}

let output = helloWorld3<string>("myString")
let output2 = helloWorld3("myString");