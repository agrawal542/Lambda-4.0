
// // method 1: named import
// import { add, sub, mul } from "./math.mjs";
// console.log(add(3, 5), sub(3, 5), mul(3, 5))


// // method 2: default import
// import airthmatic from "./math.mjs";
// console.log(airthmatic.add(3, 5), airthmatic.sub(3, 5), airthmatic.mul(3, 5))


// // method 3: names and default import
// import num, { add, sub, mul, } from "./math.mjs";
// console.log(add(3, 5), sub(3, 5), mul(3, 5), num(7))

// or
import * as math from "./math.mjs";
console.log(math.add(3, 5), math.sub(3, 5), math.mul(3, 5), math.default(7))