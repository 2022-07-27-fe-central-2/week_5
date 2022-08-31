
// usually used w/ some kind of asynchronous function that has a possibility of throwing an error i.e when retrieving data

// async (() => {
//   try {
//     const result = await someApiInvocation()
//   }
//   catch (err) {
//     // handle error
//   }
//   finally {
//     // optional that will always run
//   }
// })

try {
  // throw new Error('In try block but failed, so throwing error')
  console.log('try block executed')
}
catch (err) {
  console.log(`in catch block, error message: \n ${err}`)
}
