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

let arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];
let data = [];
function findSameElements() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 5) {
      data.push(arr[i]);
      arr.splice(i, 1);
      i--;
    }
  }
  console.log(arr);
  console.log(data);
  return data;
}

findSameElements();
