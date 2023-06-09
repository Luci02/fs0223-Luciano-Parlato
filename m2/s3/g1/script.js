// ESERCIZIO 1

const User = function (firstName, lastName, age, location) {
    this.firstName = firstName || '';
    this.lastName = lastName || '';
    this.age = age || 0;
    this.location = location || '';
    this.ageComparison = function (otherUser) {

        if (this.age > otherUser.age) {

            return `${this.firstName} è più vecchio di ${otherUser.firstName}`;

        } else if (this.age == otherUser.age) {

            return `${this.firstName} ha la stessa età di ${otherUser.firstName}`

        } else {

            return `${otherUser.firstName} è più vecchio di ${this.firstName}`;

        }

    }
}

const user1 = new User('Luciano', 'Parlato', 20, 'Rozzano');


const user2 = new User('John', 'Doe', 19, 'Milano');

console.log(user1.ageComparison(user2));


// ESERCIZIO 2

class Pet {
    constructor(petName, ownerName, species, breed) {
        this.petName = petName || '';
        this.ownerName = ownerName || '';
        this.species = species || '';
        this.breed = breed || '';
    }

    hasSameOwner = function (otherPet) {
        if(this.ownerName === otherPet.ownerName)  {
            return true
        }else{
            return false
        }
    }
}

let petsArray = [];

let form = document.querySelector('form');
form.addEventListener('submit', (e) => {

    e.preventDefault();

    let petName = document.querySelector('#petName').value;
    let ownerName = document.querySelector('#ownerName').value;
    let species = document.querySelector('#species').value;
    let breed = document.querySelector('#breed').value;

    let newPet = new Pet(petName, ownerName, species, breed);
    petsArray.push(newPet);

    let petList = document.querySelector('#petList');

    let li = document.createElement('li');
    li.textContent = `Il suo nome è ${newPet.petName} (specie: ${newPet.species}, razza: ${newPet.breed}) - proprietario: ${newPet.ownerName}`;
    petList.appendChild(li);

    document.querySelector('#petName').value = '';
    document.querySelector('#ownerName').value = '';
    document.querySelector('#species').value = '';
    document.querySelector('#breed').value = '';

    document.querySelector('#petName').focus();
});