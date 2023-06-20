// Task 1

let names = {
  first: "Tom",
  second: "Sam",
  third: "Ray",
  fourth: "Bob",
};

let { first: f, third: x, fifth = "Name №5" } = names;

console.log(f); // "Tom"

console.log(x); // "Ray"

console.log(fifth); // "Name №5"

// Task 2

let data = {
  names: ["Sam", "Tom", "Ray", "Bob"],
  ages: [20, 24, 22, 26],
};

let {
  names: [, name2, , name4],
  ages: [, age2, , age4],
} = data;

console.log(name2); // "Tom"
console.log(age2); // 24
console.log(name4); // "Bob"
console.log(age4); // 26

// Task 3

const mul = (...args) => {
  const result = args.reduce((acc, arg) => {
    if (typeof arg === "number") {
      return acc + arg;
    }
    return acc;
  }, 0);
  console.log(result);
  return result;
};

mul(true, "number", 31, false, "hi", "43", 4);

// Task 4

let server = {
  data: 0,
  convertToString: (callback) => {
    callback(() => {
      return server.data + "";
    });
  },
};

let client = {
  server: server,
  result: "",
  calc: (data) => {
    server.data = data;
    server.convertToString(client.notification());
  },
  notification: () => {
    return (callback) => {
      client.result = callback();
    };
  },
};

client.calc(123);
console.log(client.result); // "123"
console.log(typeof client.result); // "string"

// Task 5

const mapBuilder = (keys, values) => {
  const resultMap = new Map();

  for (let i = 0; i < keys.length; i++) {
    resultMap.set(keys[i], values[i]);
  }
  console.log(resultMap);
  return resultMap;
};
mapBuilder([1, 2, 3, 4], ["one", "two", "three", "four"]);

// Task 6

const arr = [];

const createFunction = () => {
  for (let i = 0; i <= 2; i++) {
    arr.push(() => {
      console.log(i);
    });
  }
};

createFunction();

arr[0]();
arr[1]();
arr[2]();
