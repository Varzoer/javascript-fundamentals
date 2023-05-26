// Task 1

const a = 1;
const b = 2;
const c = 3;

a < b < c;

// Task 2

let x = 1;
let y = 2;

let res1 = x + "" + y;
console.log(typeof res1);

let res2 = Boolean(x) + "" + y;
console.log(typeof res2);

let res3 = Boolean(x);
console.log(typeof res3);

let res4 = Number("" + x);
console.log(typeof res4);

// Task 3

function isAdult() {
  const userAge = prompt("How old are you?");
  if (userAge >= 18) {
    alert("You are an Adult");
  } else if (userAge < 18) {
    alert("You are too young");
  }
}
isAdult();

// Task 4

function findMostFrequent(arr) {
  let counts = {};
  let maxCount = 0;
  let mostFrequent;

  for (let el of arr) {
    if (counts[el]) {
      counts[el]++;
    } else {
      counts[el] = 1;
    }

    if (counts[el] > maxCount) {
      maxCount = counts[el];
      mostFrequent = el;
    }
  }

  let newArr = [mostFrequent];
  let filteredArr = arr.filter((item) => item !== mostFrequent);

  console.log(newArr, filteredArr, maxCount);
  return [newArr, filteredArr];
}
findMostFrequent([3, 5, 7, 4, 2, 55, 7, 2, 4, 5, 8, 5]);

// Task 5

function triangle() {
  const a = parseFloat(prompt("Enter the length of the first side:"));
  const b = parseFloat(prompt("Enter the length of the second side:"));
  const c = parseFloat(prompt("Enter the length of the third side:"));

  if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
    alert("Incorrect data");
    return triangle();
  }

  const p = (a + b + c) / 2;
  const area = Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(3);
  alert(`Area: ${area}`);

  if (
    a ** 2 + b ** 2 === c ** 2 ||
    a ** 2 + c ** 2 === b ** 2 ||
    b ** 2 + c ** 2 === a ** 2
  ) {
    alert("The triangle is a right triangle");
  } else {
    alert("The triangle is not a right triangle");
  }
}
triangle();

// Task 6

const regex1 = /0|[5-9]|[a-z]|[A-Z]/;

function calc(a, b, op) {
  switch (op) {
    case 1:
      console.log(a - b);
      break;
    case 2:
      console.log(a + b);
      break;
    case 3:
      console.log(a / b);
      break;
    case 4:
      console.log(a * b);
      break;
    case regex1:
    default:
      console.log("Please, enter number from 1 to 4");
  }
}
calc(10, 3, 2);

// Task 7

function isUnique(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        console.log("false");
        return false;
      }
    }
  }
  console.log("true");
  return true;
}
isUnique([12, 21, 4, 4, 56, 7, 7]);
