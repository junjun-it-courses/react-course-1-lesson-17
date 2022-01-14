function identity(arg) {
    return arg;
}
function loggingIdentity(arg) {
    // console.log(arg.length);
    // Property 'length' does not exist on type 'Type'.
    return arg;
}
function loggingIdentityArr(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentityArrAlternative(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
//# sourceMappingURL=identity.js.map