const colors = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]
const socks = 10;

function pairsMatch(ar, n) {
  const colors = new Set()
  let pairs = 0
  
  for (let i = 0; i < n; i++) {
    if (!colors.has(ar[i])) {
      colors.add(ar[i])
    } else {
      pairs++
      colors.delete(ar[i])
    }
  }
  
  return pairs
}

pairsMatch(colors, socks);