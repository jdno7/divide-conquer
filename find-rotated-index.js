const {findPivot, findFirstAsc} = require('./helpers')

function findRotatedIndex(arr, num) {
    let mid = findPivot(arr)
    let start = 0
    let end = arr.length-1
    let searchStart = false
    let searchEnd = false
    let index
    // console.log(`start: ${start}, mid: ${mid}, end: ${end}`)
    if (arr[start] === num) {
        return start
    }
    if (arr[end] === num) {
        return end
    }
    arr[start] <= num && arr[mid] >= num ? searchStart = arr.slice(start,mid+1): searchEnd = arr.slice(mid+1)
    // searchStart ? console.log('searchStart = ',searchStart) : console.log("searchEnd= ",searchEnd)
    searchStart ? index = findFirstAsc(searchStart,num) : index = findFirstAsc(searchEnd,num)
    if (index === -1){
        return index
    }
    if (searchStart) {
        return index
    }
    else {
        return index + (mid+1)
    }
}

module.exports = findRotatedIndex
// console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14))
// console.log(findFirstAsc([10,22]))



