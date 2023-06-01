// Task 1

// Task 2

function propsCount(obj) {
  if (typeof obj !== "object") {
    throw new TypeError("Input supposed to be an object");
  }
  console.log(Object.keys(obj).length);
  return Object.keys(obj).length;
}

try {
  propsCount({ name: "Gabriel", age: 35, job: "Teacher" });
} catch (e) {
  console.log(e.message);
}

// Task 3

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullname() {
    console.log(this.name + " " + this.surname);
  }
}

class Student extends Person {
  constructor(name, surname, middleName, joinYear) {
    super(name, surname);
    this.midleName = middleName;
    this.joinYear = joinYear;
  }
  showFullname() {
    super.showFullname();
    console.log(this.name + " " + this.surname + " " + this.middleName);
  }
  showCourse() {
    if (this.joinYear < 2017 || this.joinYear > 2026) {
      throw new RangeError("Invalid year");
    }
    console.log(new Date().getFullYear() - this.joinYear);
    return new Date().getFullYear() - this.joinYear;
  }
}

try {
  const student1 = new Student("Doe", "Josh", "Gray", 2017);
  console.log(student1.showCourse());
} catch (e) {
  console.log(e.message);
}

// Task 4

class Marker {
  constructor(color, inkAmount, text) {
    this.color = color;
    this.inkAmount = inkAmount;
    this.text = text;
  }

  print() {
    const spaceCount = (this.text.match(/\\s/g) || []).length;
    const textLenghtWithoutSpaces = this.text.length - spaceCount;
    const inkDecreasePerChar = 0.5;
    let resultText = "";

    for (let j = 0; j < textLenghtWithoutSpaces; j++) {
      if (this.inkAmount === 0) {
        break;
      }
      this.inkAmount -= inkDecreasePerChar;
      resultText += this.text[j];
    }
    console.log(`%c${resultText}`, `color: ${this.color}`);
    console.log(this.inkAmount + "% ink is left in your Marker");
  }
}

class RefillingMarker extends Marker {
  constructor(color, inkAmount, text) {
    super(color, inkAmount, text);
  }

  print() {
    super.print();
  }

  refill() {
    this.inkAmount = 100;
    console.log(`Your marker is refilled! %${this.inkAmount}`);
  }
}

const marker1 = new Marker("#08a320", 100, "1234567890");
marker1.print();

const marker2 = new RefillingMarker("#08a320", 50, "12sdgrtlkhjmy;iytjorut90");
marker2.print();
marker2.refill();

// Task 5

const listOfWorkers = [];

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    listOfWorkers.push(this);
  }
  #expirience = 1.2;

  get expirience() {
    return "Workers's expirience is: " + this.#expirience;
  }

  set expirience(x) {
    this.#expirience = x;
    console.log(
      this.fullName + "'s" + " new expirience is now: " + this.#expirience
    );
  }

  showSalary() {
    return "Workers's salary: " + this.dayRate * this.workingDays;
  }

  showSalaryWithExp() {
    return `Workers's salary with his expirience is:  ${
      this.dayRate * this.workingDays * this.#expirience
    }, expirience is ${this.#expirience}`;
  }
}

const worker1 = new Worker("Jane Doe", 23, 11);
const worker2 = new Worker("Josh Doe", 99, 87);
const worker3 = new Worker("Deril Doe", 88, 76);
worker1.expirience = 1.7;

function sortWorkersByExp() {
  listOfWorkers.sort((a, b) => a.expirience - b.expirience);
  listOfWorkers.map((worker) => {
    console.log(`${worker.fullName}: ${worker.dayRate * worker.workingDays}`);
  });
}
sortWorkersByExp();
