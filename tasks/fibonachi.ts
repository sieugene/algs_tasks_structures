// 1, 1, 2, 3, 5, 8, 13, 21, 34
// f(n) = f(n-1) + f(n-2)
function fibonachi(n) {
  if (n <= 0) {
    return 0
  }
  if (n <= 2) {
    return 1
  }
  return fibonachi(n - 1) + fibonachi(n - 2)
}

function fibonacci(n) {
  let a = 1
  let b = 1

  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
                        
  return b
}


// console.log(fibonachi(7))
console.log(iterationFibonachi(9))
