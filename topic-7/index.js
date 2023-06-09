// Task 1 !!!!!!!!!! Do not run this code! It supposed to work, but practically it's not, code creates a LOT of new tabs.

function openWindow() {
  console.log("openWindow called");
  let windowWidth = 300;
  let windowHeight = 300;
  let newWindow = window.open(
    "http://127.0.0.1:5500/topic-7/",
    "_blank",
    `width=${windowWidth}, height=${windowHeight}`
  );
  setTimeout(() => {
    windowWidth = 500;
    windowHeight = 500;
    newWindow.resizeTo(windowWidth, windowHeight);
  }, 2000);

  setTimeout(() => {
    newWindow.close();
  }, 4000);
}

// Task 2

const p = document.querySelector("#text");

function changeCSS() {
  p.style.color = "orange";
  p.style.fontSize = "20px";
  p.style.fontFamily = "Comic Sans MS";
}

// Task 3

const link = document.createElement("a");
link.textContent = "Link Title";
link.href = "http://127.0.0.1:5500/";
document.body.appendChild(link);

link.addEventListener("mouseenter", () => {
  link.style.backgroundColor = "yellow";
});

link.addEventListener("mouseleave", () => {
  link.style.backgroundColor = "white";
});

/////////////////////

const buttonBlueBackground = document.createElement("button");
buttonBlueBackground.textContent = "Blue button";
document.body.appendChild(buttonBlueBackground);

buttonBlueBackground.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
});

/////////////////////

const buttonPinkBackground = document.createElement("button");
buttonPinkBackground.textContent = "Pink button";
document.body.appendChild(buttonPinkBackground);

buttonPinkBackground.addEventListener("click", () => {
  document.body.style.backgroundColor = "pink";
});

/////////////////////

const buttonBrownBackground = document.createElement("button");
buttonBrownBackground.textContent = "Brown button";
document.body.appendChild(buttonBrownBackground);

buttonBrownBackground.addEventListener("mousedown", () => {
  document.body.style.backgroundColor = "brown";
});

buttonBrownBackground.addEventListener("mouseup", () => {
  document.body.style.backgroundColor = "white";
});

// Task 4

const selectTag = document.createElement("select");
document.body.appendChild(selectTag);

const delButton = document.createElement("button");
delButton.textContent = "Delete element";
document.body.appendChild(delButton);

const nameArr = ["Jake", "Kate", "Tom", "Peet", "Ann"];

const options = nameArr.map((value, index) => {
  let option = document.createElement("option");
  option.value = index;
  option.innerHTML = value;
  selectTag.append(option);
});

function delElFromList() {
  selectTag.remove(selectTag.selectedIndex);
}

delButton.addEventListener("click", delElFromList);

// Task 5

const actionButton = document.createElement("button");
actionButton.textContent = "Live button";
document.body.appendChild(actionButton);

function mouseHover() {
  const pTag = document.createElement("p");
  pTag.textContent = "Mouse is on me!";
  document.body.appendChild(pTag);
}

function mouseNotHover() {
  const pTag = document.createElement("p");
  pTag.textContent = "Mouse is not on me!";
  document.body.appendChild(pTag);
}

function mouseClick() {
  const pTag = document.createElement("p");
  pTag.textContent = "I was pressed!";
  document.body.appendChild(pTag);
}

actionButton.addEventListener("mouseenter", mouseHover);
actionButton.addEventListener("mouseleave", mouseNotHover);
actionButton.addEventListener("click", mouseClick);