// 1
const colors = ["red", "green", "blue"];

let [firstColor, secondColor, thirdColor] = colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// 2
const person = { name: "Alice", age: 25, city: "Wonderland" };
let { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);

// 3
const settings = { theme: "dark", language: "en" };
let { theme, language, mode = "light" } = settings;
console.log(theme);
console.log(language);
console.log(mode);