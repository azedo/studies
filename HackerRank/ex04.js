function catsAndMouse(x, y, z) {
  if (Math.abs(x - z) < Math.abs(y - z)) {
    return 'Cat A'
  } else if (Math.abs(x - z) > Math.abs(y - z)) {
    return 'Cat B'
  } else {
    return 'Mouse C'
  }
}

console.log(catsAndMouse(1, 3, 2))

