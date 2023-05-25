// Task 1

function compact(arr) {
  const result0 = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result0.includes(arr[i])) {
      result0.push(arr[i]);
    }
  }
  console.log(result0);
  return result0;
}
compact([1, 2, 2, 4, 7]);

// Task 2

function createArray(start, end) {
  const result1 = [];
  for (let i = 0; result1.length < end - 1; i++) {
    result1.push(start + i);
  }
  console.log(result1);
  return result1;
}
createArray(2, 9);

// // Task 3

// function lowHighDouble(a, b) {
//   for (let i = a; i <= b; i++) {
//     for (let j = 0; j < i - a + 1; j++) {
//       console.log(i);
//     }
//   }
// }
// lowHighDouble(2, 6);

// Task 4

function randArray(k) {
  const result3 = [];
  for (let i = 0; i < k; i++) {
    let randNum = Math.floor(Math.random() * 500) + 1;
    result3.push(randNum);
  }
  console.log(result3);
  return result3;
}
randArray(3);

//Task 5

function sortValues(unsortedArr) {
  const strArr = [];
  const numArr = [];
  const boolArr = [];
  const undefinedArr = [];
  const nullArr = [];

  const result4 = [];

  for (let i = 0; i < unsortedArr.length; i++) {
    if (typeof unsortedArr[i] === "string") {
      strArr.push(unsortedArr[i]);
    } else if (typeof unsortedArr[i] === "number") {
      numArr.push(unsortedArr[i]);
    } else if (typeof unsortedArr[i] === "boolean") {
      boolArr.push(unsortedArr[i]);
    } else if (unsortedArr[i] === undefined) {
      undefinedArr.push(unsortedArr[i]);
    } else if (unsortedArr[i] === null) {
      nullArr.push(unsortedArr[i]);
    }
  }

  result4.push(strArr, numArr, boolArr, undefinedArr, nullArr);

  console.log(result4);
  return result4;
}

sortValues([
  1,
  33,
  54,
  "duck",
  "shield",
  "pato",
  true,
  34,
  "helo",
  "false",
  true,
  null,
  234.432,
  undefined,
]);

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

// Task 8

function greetByTime() {
  const hours = new Date().getHours();
  if (/6|7|8|9|10|11/.test(hours)) {
    console.log("Good morning");
  } else if (/12|13|14|15|16|17/.test(hours)) {
    console.log("Good afternoon");
  } else if (/18|19|20|21|22/.test(hours)) {
    console.log("Good evening");
  } else if (/23|0|1|2|3|4|5/.test(hours)) {
    console.log("Good night");
  }
}
greetByTime();
