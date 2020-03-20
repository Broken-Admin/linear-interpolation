const {lerp, inverseLerp} = require('./lerp-modules');

// Lerp 0, 10, 0.5
console.log("lerp(0, 10, 0.5) // 5");
console.log(lerp(0,10,0.5)); // 5

// InverseLerp 0, 10, 5
console.log("inverseLerp(0,10,5) // 0.5");
console.log(inverseLerp(0,10,5)); // 0.5