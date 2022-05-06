const {findPivot} = require('./helpers')

function findRotationCount(arr) {
  const pivot = findPivot(arr)
  if (pivot === -1) {
      return pivot
  }
  console.log(arr.slice(0,pivot+1.).length)
}

module.exports = findRotationCount

findRotationCount([7, 9, 11, 12, 15])