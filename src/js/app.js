// prompt task
let age = prompt("Please, enter your age");
if (age < 18) {
  alert("No entry to under 18s!!!");
} else {
  alert("Welcome!");
}

// confirm task
let question = confirm("Do you want to make page black?");
if (question == true) {
  document.body.style.backgroundColor = "black";
}

// object task
class Human {
  constructor(firstName, surname, password) {
    this.firstName = firstName;
    this.surname = surname;
    this.password = password;
  }
}

let person = new Human("Jane", "Jhonson", 12345);

let person2 = {
  firstName: "Jane",
  surname: "Jhonson",
  fullName: function () {
    return this.firstName + " " + this.surname;
  },
  get upperCase() {
    return this.fullName().toUpperCase();
  },
};

let heading = document.getElementById("full-name");
heading.innerHTML = person2.upperCase;
