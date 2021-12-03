const START = Date.now()

function someFn() {
  console.log("time", Date.now() - START)
  console.log("args", arguments)
}

Function.prototype.delay = function (ms) {
  // console.log(this)
  // return function () {
  //   console.log(this)
  // }.bind(this)
  return (...args) => {
    setTimeout(() => {
      this.apply(this, args)
    }, ms)
  }
}

const f = someFn.delay(500)

f("arg1", "arg2", 1, 2)
