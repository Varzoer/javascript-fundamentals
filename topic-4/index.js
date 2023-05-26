// Task 1

// Task 2

function checkAge() {
  try {
    let userName = prompt("Please enter your name.");
    while (userName === "" || userName === null) {
      userName = prompt("The field is empty! Please enter your name.");
      throw new Error("Field is empty! Please fill in the prompts.");
    }
    let userAge = prompt("Please enter your age.");
    let name = prompt("Please enter your status.");
    while (name === "" || name === null) {
      name = prompt("The field is empty! Please enter your status.");
      throw new Error("Field is empty! Please fill in the prompts.");
    }
  } catch (e) {
    console.log("Input error: " + e.message);
  }

  while (userAge === "" || userAge === null) {
    userAge = prompt("The field is empty! Please enter your age.");
    throw new Error("Field is empty! Please fill in the prompts.");
  }

  try {
    if (userAge < 18 || userAge > 70) {
      throw new RangeError("This age is not suitable.");
    }
  } catch (e) {
    console.log("Input error: " + e.message);
  }
}
checkAge();
