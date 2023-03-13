class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }
  static compareAge(u1, u2) {
    return u1.age > u2.age
      ? `${u1.firstName} è più vecchio di ${u2.firstName}`
      : `${u2.firstName} è più vecchio di ${u1.firstName}`;
  }
}

const gabriele = new User("Gabriele", "Cusscinà", "21", "Messina");
const luca = new User("Luca", "Sberna", "20", "Milana");

console.log(User.compareAge(gabriele, luca));

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }
  static sameOwner(p1, p2) {
    return p1.ownerName.toLowerCase() === p2.ownerName.toLowerCase()
      ? true
      : false;
  }
}

const pet1 = new Pet("Pulce", "Mauro", "dog", "meticcio");
const pet2 = new Pet("Kira", "Alessandra", "dog", "meticcio");

console.log(Pet.sameOwner(pet1, pet2));

const pets = [];
document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    let form = Object.fromEntries(new FormData(e.target).entries());
    e.target.reset();
    let tableBody = document.querySelector("table tbody");
    tableBody.innerHTML = "";

    pets.push(new Pet(form.petName, form.ownerName, form.species, form.breed));

    for (const pet of pets) {
      tableBody.insertAdjacentHTML(
        "beforeend",
        `<tr><td>${pet.petName}</td><td>${pet.ownerName}</td><td>${pet.species}</td><td>${pet.breed}</td></tr>`
      );
    }
  });
});
