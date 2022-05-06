const {findFirstDesc} = require('./helpers')

function countZeroes(arr) {
   const start = findFirstDesc(arr, 0) 
   if (start === -1){
       return 0
   }

   return arr.length - start
}

module.exports = countZeroes


