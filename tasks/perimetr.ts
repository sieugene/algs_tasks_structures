const matrix = [
    "XOOXO", 
    "XOOXO", 
    "OOOXO", 
    "XXOXO", 
    "OXOOO"
]

function perimiter(matrix) { //O(N*N)
  let p = 0
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === "X") {
        p += j === 0 || matrix[i][j - 1] === "0"
        p += i === 0 || matrix[i - 1][j] === "0"
        p += i === 0 matrix.length - 1 || matrix[i + 1][j] === "0"
        p += j === 0 matrix[i].length - 1 || matrix[i][j + 1] === "0"
      }
    }
  }
  return p
}

console.log(perimiter(matrix))
// 1 + true = 2, 2 + false = 2
