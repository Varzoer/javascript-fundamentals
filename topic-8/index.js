// Task 1

const regExp1 = /^[A-Z]/;

function upperCase(str) {
  if (regExp1.test(str)) {
    console.log("String's starts with uppercase character");
    return true;
  } else {
    console.log("String's not starts with uppercase character");
    return false;
  }
}
upperCase("RegExp");

// Task 2

const regExp2 = /^[a-zA-Z0-9]{6,30}@(gmail|outlook|yahoo)\.com$/;

function checkEmail(email) {
  if (regExp2.test(email)) {
    console.log("E-mail is valid");
    return true;
  } else {
    console.log("E-mail is not valid");
    return false;
  }
}
checkEmail("123434567890@gmail.com");

// Task 3

const regExp3 = /(\w+) (\w+)/;

function switchPlaces(str) {
  const wordArr = str.replace(regExp3, "$2 $1");
  console.log(wordArr);
  return wordArr;
}
switchPlaces("Java Script");

// Task 4

const regExp4 = /^\d{4}-\d{4}-\d{4}-\d{4}$/;

function checkCard(cardNum) {
  if (regExp4.test(cardNum)) {
    console.log("Card nummber is valid");
    return true;
  } else {
    console.log("Card nummber is not valid");
    return false;
  }
}
checkCard("4444-4444-4444-4444");

// Task 5

const regExp5 = /^(?!_|-)[a-zA-Z0-9_-]+@(gmail|outlook|yahoo)\.com$/;
const regExp6 = /.*-.*-/;

  function checkEmailV2(email) {
    if (regExp5.test(email) && !regExp6.test(email)) {
      console.log("Email is correct V2!");
    } else {
      console.log("Email is not correct V2!");
    }
  };

checkEmailV2("fgd-fdg@gmail.com");

// Task 6

const regExp8 = /[a-zA-Z0-9]{2,10}/;
const regExp9 = /^\d/;
const regExp10 = /\d\.\d|\d/g;

function checkLogin(login) {
  if (regExp9.test(login)) {
    console.log("Login is not correct!");
    return false;
  } else if (regExp8.test(login)) {
    console.log(login.match(regExp10));
    console.log("Login is correct!");
    return true;
  }
}
checkLogin("dA4d6h3.3h.4.h");
