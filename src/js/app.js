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
let obj = {
  firstName: "Jane",
  surname: "Jack",
  password: 12345,
  fullName: function () {
    return this.firstName + " " + this.surname;
  },
};

class Human {
  constructor(firstName, surname, password) {
    this.firstName = firstName;
    this.surname = surname;
    this.password = password;
  }
}

function UpperCase() {
  return obj.fullName().toUpperCase();
}

console.log(UpperCase());
