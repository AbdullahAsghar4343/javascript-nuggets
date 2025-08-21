// MAP Method
const people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'john',
    age: 26,
    position: 'intern',
  },
];

const ages = people.map((person) => {
    let {age, name} = person;
    // console.log(age * 2, name.toUpperCase());
    
});

// const allPeople = people.map((person) =>`<h2>${person.name}</h2> <p>${person.age}</p> <p>${person.position}</p>`
// )
const allPeople = people.map((person) =>{
  return `<h2>${person.name}</h2>
            <p>${person.age}</p>
            <p>${person.position}</p>`;
})

const result = document.querySelector('#result');
result.innerHTML = allPeople.join('');