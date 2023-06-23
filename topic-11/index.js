// Task 1

const getPromise = (message, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
};

getPromise("test promise", 5000).then(function (data) {
  console.log(data);
});

// Task 2

const calcArrProduct = (arr) => {
  return new Promise((resolve, reject) => {
    const result = arr.reduce((acum, item) => {
      return acum * item;
    }, 1);
    if (typeof result === "number") {
      resolve(result);
    } else {
      reject(new Error("Error! Incorrect array!"));
    }
  });
};

calcArrProduct([3, 4, 5])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

calcArrProduct([5, "user2", 7, 12])
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Task 3

const logUserNum = () => {
  return new Promise((resolve, reject) => {
    let number = prompt("Enter a number");
    if (isNaN(number)) {
      reject("Not a number");
    } else {
      resolve(number);
    }
  });
};

logUserNum()
  .catch((error) => {
    return new Promise((resolve, reject) => {
      let number;
      do {
        alert(error);
        number = prompt("Enter a number");
      } while (isNaN(number));
      resolve(number);
    });
  })
  .then((result) => {
    if (result !== null) {
      console.log(result);
    }
  });

// Task 4

const delay = (i, time) =>
  new Promise((resolve) => setTimeout(() => resolve(i), time));

const logNumbers = async () => {
  for (let i = 0; i <= 10; i++) {
    let randomTimeInterval = Math.floor(Math.random() * (10000 - 0 + 1)) + 0;
    await delay(i, randomTimeInterval);
    console.log(i);
  }
};

logNumbers();