class CoffeeMaker {
  #temp = 0
  #isCoffeeGround = false
  constructor(coffeeBeansInG, waterAmountInMl) {
    this.coffeeBeansInG = coffeeBeansInG
    this.waterAmountInMl = waterAmountInMl
  }
  brewCoffee() {
    // brew starts
    console.log('brewing coffee...')

    // boil water
    console.log(`starting water temp: ${this.#temp} degrees`)
    this.#boilWater()
    setTimeout(() => {
      console.log(`finished boiling water, temp: ${this.#temp}`)
    }, 2000)

    // grind coffee
    this.#grindCoffee()
    console.log(`Grinding coffee`)
    setTimeout(() => {
      console.log(`finished grinding coffee beans: ${this.#isCoffeeGround}`)
    }, 3000)

    // finish brew
    setTimeout(() => {
      if (this.#temp === 100 && this.#isCoffeeGround) {
        console.log(`*** Here is your cup of coffee! ***`)
      } else {
        console.log(`Uh Oh, There was a problem with your brew :(`)
      }
    }, 5000)

  }

  #grindCoffee() {
    this.#isCoffeeGround = true
  }
  #boilWater() {
    this.#temp = 100
  }
}

const brevilleCoffeeMaker = new CoffeeMaker(15, 100)
brevilleCoffeeMaker.brewCoffee()
// brevilleCoffeeMaker.#boilWater()
