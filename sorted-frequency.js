const {findFirstDesc, findFirstAsc} = require('./helpers')


function sortedFrequency (arr, target) {
    let start = findFirstAsc(arr,target)
    if (start === -1){
        return -1
    }
    
   if (start === arr.length-1) {
       return 1
   }
    const end = (arr.length) - findFirstDesc(arr.reverse(), target) 
    if (start === end){
        return 1
    }
    console.log(`start: ${start}, end: ${end}`)
    return (end - start)  
}

// console.log(sortedFrequency([1,1,2,2,2,2,3,4,4,4],4 ))
module.exports = sortedFrequency