let userName = "John";
const age = 25;
userName = "Jane";
const skills = ["HTML", "CSS", "JavaScript"];
console.log("hello world");
console.log(skills.at(1));
const sum = 10 + 5;
const product = 10 * 2;
console.log(sum, product, "hello world");
const firstName = "Jane";
const lastName = "Doe";
console.log("Hello, " + firstName + " " + lastName);
console.log("Hello," , firstName , lastName);
console.log(`Hello, ${firstName} ${lastName}`);
function greet(name) {
    return `Hello, ${name} !`;
}
console.log(greet("John"));
const greet1 = function(name) {
    return `Hello, ${name} !`;
};
console.log(greet1("Jane"));
const greet2 = (name) => `Hello, ${name} !`;
console.log(greet2("Alex"));
const greet3 = (name) =>  {
    return `Hello, ${name} !`
};
console.log(greet3("Matt"));
// const square = (num) => num * num;
console.log(function(num) {
    return num * num;
}(5));
const test = function(a, b) {
    return a + b;
}(3,5);
console.log(test);