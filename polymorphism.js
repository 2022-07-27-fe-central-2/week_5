class Animal {
  speak() {
    console.log('Need type of animal to know how to speak')
  }
}

class Cat extends Animal {
  speak() {
    console.log('Meow')
  }
}

class Dog extends Animal {
  speak() {
    console.log('Bark')
  }
}

const animal = new Animal()
animal.speak()

const cat = new Cat()
cat.speak()

const dog = new Dog()
dog.speak()
