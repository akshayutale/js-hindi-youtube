console.log(" ---- 01  -- Only Number ----")

let score1 = "33"

console.log(typeof score1)
console.log(typeof (score1))

let valueInNumber01 = Number(score1)
console.log(typeof valueInNumber01)

console.log(" ---- 02 String to convert number ----")

let score2 = "33abc"

console.log(typeof score2)
console.log(typeof (score2))

let valueInNumber02 = Number(score2)
console.log(typeof valueInNumber02)
console.log(valueInNumber02)

console.log(" ---- 03 Null Value ----")

let score3 = null

console.log(typeof score3)
console.log(typeof (score3))

let valueInNumber03 = Number(score3)
console.log(typeof valueInNumber03)
console.log(valueInNumber03)

console.log(" ---- 04 Undefined ----")

let score4 = undefined

console.log(typeof score4)
console.log(typeof (score4))

let valueInNumber04 = Number(score4)
console.log(typeof valueInNumber04)
console.log(valueInNumber04)


console.log(" ---- 05 Boolean ----")

let score5 = true

console.log(typeof score5)
console.log(typeof (score5))

let valueInNumber05 = Number(score5)
console.log(typeof valueInNumber05)
console.log(valueInNumber05)

console.log(" ---- 06 Basic Conversion ----")

let IsLoggedIn = true
let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanIsLoggedIn)

let IsLoggedIn1 = 1
let BooleanIsLoggedIn1 = Boolean(IsLoggedIn1)
console.log(BooleanIsLoggedIn1)

let IsLoggedIn2 = ""
let BooleanIsLoggedIn2 = Boolean(IsLoggedIn2)
console.log(BooleanIsLoggedIn2)

let IsLoggedIn3 = "Akshay"
let BooleanIsLoggedIn3 = Boolean(IsLoggedIn3)
console.log(BooleanIsLoggedIn3)


console.log(" ---- 07 String Conversion ----")

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)