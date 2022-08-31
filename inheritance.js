class Make {
  constructor(make) {
    // console.log('constructor invoked')
    this.make = make
  }
  getMake() {
    console.log(`Make of car: ${this.make}`)
  }
}

class Model extends Make{
  constructor(make, model) {
    super(make)
    this.model = model
  }
  getModel() {
    console.log(`Model of car: ${this.model}`)
  }
}

const car1 = new Make('Ford')
car1.getMake()
const car2 = new Model('Ford', 'Mustang')
car2.getMake()
car2.getModel()