// Task 1

function replaceElements() {
  const listItems = document.querySelectorAll("#list li");
  const liTextContent = Array.from(listItems).map((item) => {
    return item.textContent;
  });
  [liTextContent[1], liTextContent[4]] = [liTextContent[4], liTextContent[1]];
  [liTextContent[2], liTextContent[4]] = [liTextContent[4], liTextContent[2]];
  alert(liTextContent);
}
replaceElements();

// Task 2

function styleHtmlTags() {
  const h1 = document.getElementsByTagName("h1");
  const firstH1 = h1[0];
  firstH1.style.backgroundColor = "#a2ff96";

  const myDivFirst = document.querySelector("#myDiv p:nth-of-type(1)");
  myDivFirst.style.fontWeight = "bold";

  const myDivSecond = document.querySelector("#myDiv p:nth-of-type(2)");
  myDivSecond.style.color = "red";

  const myDivThird = document.querySelector("#myDiv p:nth-of-type(3)");
  myDivThird.style.textDecoration = "underline";

  const myDivFourth = document.querySelector("#myDiv p:nth-of-type(4)");
  myDivFourth.style.fontStyle = "italic";

  const listId = document.querySelector("#myList");
  const listItems = document.querySelectorAll("#myList li");
  const liTextContent = Array.from(listItems).map((item) => {
    return item.textContent;
  });
  listItems.forEach((item) => {
    listId.removeChild(item);
  });
  const newLiContent = document.createTextNode(liTextContent.join(""));
  listId.appendChild(newLiContent);

  const span = document.getElementsByTagName("span");
  span[0].style.visibility = "hidden";
}
styleHtmlTags();

// Task 3

function ctreateMainSection() {
  const main = document.createElement("main");
  main.classList.add("mainClass");
  main.classList.add("check");
  main.classList.add("item");
  document.body.appendChild(main);

  const div = document.createElement("div");
  main.appendChild(div);
  div.setAttribute("id", "myDiv");

  const p = document.createElement("p");
  div.appendChild(p);
  p.innerText = "First paragraph";
}
ctreateMainSection();

// Task 4

const outEl = document.querySelector(".out");
const inputEl = document.querySelectorAll(".arr");
const btnEl = document.querySelector(".btn");

function getDataFromInput() {
  const inputTextContent = Array.from(inputEl).map((item) => {
    return item.value;
  });

  const result = inputTextContent.join(", ");
  const newEl = document.createElement("p");
  newEl.textContent = result;
  outEl.appendChild(newEl);
}

btnEl.addEventListener("click", getDataFromInput);

// Task 5

function placeAnimations() {
  const circles = document.querySelectorAll(".circle");

  const animClassArr = Array.from(circles).map((item) => {
    return item.dataset.anim;
  });

  for (let i = 0; i < circles.length; i++) {
    circles[i].classList.add(animClassArr[i]);
  }

  console.log(animClassArr);
}
placeAnimations();

// Task 6