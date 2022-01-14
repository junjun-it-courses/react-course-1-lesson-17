// Без дженериков нам нужно было бы передавать определенный тип
function helloWorld(arg) {
    return arg;
}
// Также мы можем описать эту функцию через тип any
function helloWorld2(arg) {
    return arg;
}
// Дженерик тип
function helloWorld3(arg) {
    return arg;
}
var output = helloWorld3("myString");
var output2 = helloWorld3("myString");
//# sourceMappingURL=hello_world.js.map