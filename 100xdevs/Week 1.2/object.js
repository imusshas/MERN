const abid = { firstName: "Abid", gender: "Male" };
const muhib = { firstName: "Muhib", gender: "Male" };
const ada = { firstName: "Ada", gender: "Female" };

console.log(ada.firstName + " is a " + ada["gender"]);


const personsObject = [abid, muhib, ada]


const persons = [{ firstName: "Abid", gender: "Male" }, { firstName: "Muhib", gender: "Male" }, { firstName: "Ada", gender: "Female" }];
console.log(persons);

console.log("Gentlemen:");
for (let i = 0; i < personsObject.length; i++) {
  if (personsObject[i]["gender"] === "Male") {
    console.log(personsObject[i].firstName);
  }
}

console.log("forEach:");
personsObject.forEach((curPerson) => console.log(curPerson));