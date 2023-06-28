// Task 1

const btn = document.querySelector(".btn");
const btn2 = document.querySelector(".btn2");

btn.addEventListener("click", () => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      let name = data.results[0].name;
      btn.innerHTML = `${name.first} ${name.last}`;
    });
});

// Task 2

btn2.addEventListener("click", () => {
  fetch("https://www.googleapis.com/books/v1/volumes?q=JavaScript")
    .then((response) => response.json())
    .then((data) => {
      const books = data.items;
      const bookNames = books.map((book) => book.volumeInfo.title);

      const bookListElement = document.querySelector(".bookList");

      bookNames.forEach((bookName) => {
        const li = document.createElement("li");
        li.textContent = bookName;
        bookListElement.appendChild(li);
      });
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// Task 3

(() => {
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())
    .then((data) => {
      const picture = "Profile picure: " + data.results[0].picture.large;
      const name = "Name: " + data.results[0].name.first;
      const age = "Age: " + data.results[0].dob.age;
      const gender = "Gender: " + data.results[0].gender;
      const nat = "Nationality: " + data.results[0].nat;
      const login = "Username: " + data.results[0].login.username;
      const pwd = "Password: " + data.results[0].login.password;
      const email = "E-mail: " + data.results[0].email;

      const userArray = [picture, name, age, gender, nat, login, pwd, email];

      const bookListElement = document.querySelector(".bookList");

      userArray.forEach((userPropety) => {
        const p = document.createElement("p");
        p.textContent = userPropety;
        bookListElement.appendChild(p);
      });
    });
})();
