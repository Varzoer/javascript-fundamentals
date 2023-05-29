// // Task 1

function sumSliceArray(arr, a, b) {
  if (!Array.isArray(arr)) {
    console.log("First input has to be an array!");
  } else if (typeof a !== "number") {
    console.log("Second input has to be a number!");
  } else if (typeof b !== "number") {
    console.log("Third input has to be a number!");
  } else if (a > arr.length) {
    console.log("Second input outranges array!");
  } else if (b > arr.length) {
    console.log("Third input outranges array!");
  } else {
    console.log(arr[a] + arr[b]);
    return arr[a] + arr[b];
  }
}
sumSliceArray([1, 2, 3, 4, 5], 0, 3);

// Task 2

function checkAge() {
  try {
    const userName = prompt("Enter your name");
    if (userName === "" || /[0-9]/.test(userName)) {
      console.log("Please enter your name");
      throw new Error("Input error");
    }

    const userAge = Number(prompt("Enter your age"));
    if (userAge === "" || isNaN(userAge)) {
      console.log("Please enter your age");
      throw new Error("Input error");
    } else if (userAge < 18 || userAge > 70) {
      throw new RangeError("This age is not suitable");
    }

    const userStatus = prompt("Enter your status (User/Moderator/Admin)");
    if (!/user|moderator|admin/i.test(userStatus)) {
      console.log("Please enter your status");
      throw new EvalError("Input error");
    }

    console.log("Movie");
  } catch (e) {
    console.log(e.message);
  }
}
checkAge();

// Task 3

function calcRectangleArea(width, height) {
  const rectangleWidth = prompt("Enter rectangle's width");
  if (rectangleWidth === "" || isNaN(rectangleWidth)) {
    throw new TypeError("Numeric symbols only");
  }
  const rectangleHeight = prompt("Enter rectangle's height");
  if (rectangleHeight === "" || isNaN(rectangleHeight)) {
    throw new TypeError("Numeric symbols only");
  }

  console.log(rectangleWidth * rectangleHeight);
  return rectangleWidth * rectangleHeight;
}

try {
  const area = calcRectangleArea(34, 67);
} catch (e) {
  console.log(e.message);
}

// Task 4

class MonthException {
  constructor(message) {
    this.message = message;
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  if (typeof month !== "number" || month < 1 || month > 12) {
    throw new MonthException("Invalid month number");
  }

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[month - 1];
}

try {
  const monthName = showMonthName("tyu");
  console.log(monthName);
} catch (e) {
  console.log(e.name + ": " + e.message);
}

// Task 5

function showUser(id) {
  if (id < 0) {
    throw new RangeError("Number must not be negative");
  }
  return {id: id};
}

function showUsers(ids) {
  const result = [];
  let user = null;
  for (const id of ids) {
    try {
      user = showUser(id);
      result.push(user);
    } catch (e) {
      console.error(e.name + ": " + e.message);
    }
  }
  console.log(result);
  return result;
}

showUsers([1, -4, 2, -3]);