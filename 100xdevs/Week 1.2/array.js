const personNames = ["Abid", "Ullah", "Muhib"];
const personAges = [22, 23, 24];


console.log(personNames[0] + " " + personNames[1] + " " + personNames[2] + " " + personNames[89] + " " + personNames[-89]);

console.log(personAges);

console.log("Even ages:");
for (let i = 0; i < personAges.length; i++) {
  if (personAges[i] % 2 === 0) {
    console.log(personAges[i]);
  }
}
