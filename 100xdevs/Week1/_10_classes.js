class Animal {
  constructor(name, speaks) {
    this.name = name;
    this.speaks = speaks;
  }
  greet() {
    console.log("Hi, I am " + this.name);
  }

  speak () {
    console.log(this.name + " says, " + this.speaks);
  }
}

const dog = new Animal("Doggo", "Woof");
dog.greet();
dog.speak();

const cat = new Animal("Catty", "Meow");
cat.greet();
cat.speak();