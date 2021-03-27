function findMinimalCost(s) {
  console.log(s[0])
  console.log(s[1])
  console.log(s[2])

  const row = () => {
    for (let i = 0; i < s.length; i++) {
      console.log(s[i])
      console.log(s[i].reduce((a, b) => a + b, 0))
    }
  }

  const col = () => {
    const cols = []

    for (let i = 0; i < s.length; i++) {
      const group = []

      for (let j = 0; j < s[0].length; j++) {
        group.push(s[j][i])
      }
      console.log(group.reduce((a, b) => a + b))
      cols.push(group)
    }

    console.log(cols)
  }

  const diagonal = () => {
    const diag = []

    for (let i = 0; i < s.length; i++) {
      const group = []

      const lTrB = s.forEach(c => console.log(c[i]))
      // const lBrT =


    }

    console.log(diag)
  }

  row()
  col()
  diagonal()
}

const testValue = [[4, 9, 2], [3, 5, 7], [8, 1, 5]]

findMinimalCost(testValue)
