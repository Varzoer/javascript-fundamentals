// Task 2
console.log("Smychok");

// Task 3

const a = "Hi";
let x = "Dragon";

console.log(a, x);

x = a;

console.log(a, x);

// Task 4

const car = {
  string: "Cat",
  number: 12,
  boolean: true,
  undefined: undefined,
  null: null,
};

// Task 5

const isAdult = confirm("Are you an adult?");
console.log(isAdult);

// Task 6

const myName = "Mykola";
const mySurname = "Smychok";
const myGroup = "@team-ns";
const myBirthdayDate = 2008.0409;
const isMarried = false;
const parrotAsPet = undefined;
const otherInfo = null;

// Task 7

const username = prompt("Enter your username");
const email = prompt("Enter your e-mail");
const pwd = prompt("Enter your password");

alert(
  `Your username is ${username}, your e-mail is ${email}, and your password is ${pwd}.`
);

// Task 8

  const hourRegex = /^(hour)s?$/i;
  const dayRegex = /^(day)s?$/i;
  const monthRegex = /^(month)s?$/i;
  const yearRegex = /^(year)s?$/i;

function convertIntoSeconds() {
  const timeType = prompt(
    "What type of time do you want to convert into seconds? (hour / day / month / year)"
  );

  if (hourRegex.test(timeType)) {
    const numOfHours = prompt(
      "How many hours do you need to be converted into seconds?"
    );
    const secInHours = numOfHours * 60 * 60;
    alert(`The number of seconds is: ${secInHours}.`);
  } else if (dayRegex.test(timeType)) {
    const numOfDays = prompt(
      "How many days do you need to be converted into seconds?"
    );
    const secInDays = numOfDays * 24 * 60 * 60;
    alert(`The number of seconds is: ${secInDays}.`);
  } else if (monthRegex.test(timeType)) {
    const numOfMonths = prompt(
      "How many months do you need to be converted into seconds?"
    );
    const secInMonths = numOfMonths * 30.5 * 24 * 60 * 60;
    alert(`The number of seconds is: ${secInMonths}.`);
  } else if (yearRegex.test(timeType)) {
    const numOfYears = prompt(
      "How many years do you need to be converted into seconds?"
    );
    const secInYears = numOfYears * 365.25 * 24 * 60 * 60;
    alert(`The number of seconds is: ${secInYears}.`);
  } else {
    alert("Wrong input! Please check your input for mistakes!");
    convertIntoSeconds();
  }
}

convertIntoSeconds();

// Bonus Task

