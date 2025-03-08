// method 1: named export
// export function add(x, y) { return x + y; }
// export function sub(x, y) { return x - y; }
// export function mul(x, y) { return x + y; }

// or
// function add(x, y) { return x + y; }
// function sub(x, y) { return x - y; }
// function mul(x, y) { return x + y; }
// export {
//     add,
//     sub,
//     mul
// }


// method 2: default export
// function add(x, y) { return x + y; }
// function sub(x, y) { return x - y; }
// function mul(x, y) { return x + y; }
// export default {
//     add,
//     sub,
//     mul
// }


// method 3: names and default export
export function add(x, y) { return x + y; }
export function sub(x, y) { return x - y; }
export function mul(x, y) { return x + y; }
export default function num(x) { return x }


