//Exercise 1
const partA = "Hello ";
const partB = "World";
Date.now() % 2 == 0
  ? console.log(`${partA}${partB}`)
  : console.log(`${partB} -- ${partA}`);

//Exercise 2 - trochę po polsku
let a = prompt("Podaj mnożną");
let b = prompt("Podaj mnożnik");
const multiply = (multiplicand, multiplier = 1) => {
  console.log(multiplicand * multiplier);
};
b !== "" && !isNaN(b) ? multiply(a, b) : multiply(a);

//Exercise 3
let arr = prompt("Wpisz liczby oddzielając je przecinkami.").split(",");
arr = arr.map(Number);
const average = (...numbers) => {
  let sum = 0;
  for (let number of numbers) sum += number;
  console.log(sum / numbers.length);
};
average.apply(this, arr);
const averageSecond =
  arr.reduce((total, element) => {
    return total + element;
  }, 0) / arr.length;
console.log("Sprawdzenie wyniku średniej " + averageSecond);
//average(arr); //to nie działa
//average(1, 2, 3, 4, 5, 6, 7); //to działa

//Exercise 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(this, grades);

//Exercise 5
strangeData = [1, 4, "Iwona", false, "Nowak"];

const [, , FirstName, , Lastname] = strangeData;
console.log(`${FirstName} ${Lastname}`);
