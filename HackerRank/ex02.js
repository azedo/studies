const steps = 8;
const directions = 'UDDDUDUU'
let count = 0
let valley = 0

for (let i = 0; i < steps; i++) {
  if (directions[i] === 'U') {
    count++
    
    if (count === 0) {
      valley++
    }
  } else {
    count--
  }
}

valley