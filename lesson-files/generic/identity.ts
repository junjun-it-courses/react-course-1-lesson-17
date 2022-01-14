function identity<Type>(arg: Type): Type {
    return arg;
}

function loggingIdentity<Type>(arg: Type): Type {
    // console.log(arg.length);
    // Property 'length' does not exist on type 'Type'.
    return arg;
}

function loggingIdentityArr<Type>(arg: Type[]): Type[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentityArrAlternative<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}