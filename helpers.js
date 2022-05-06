function findAsc (arr, target) {
    let start = 0
    let end = arr.length -1
    if (arr[start] === target) {
        return start
    }
    if (target > arr[arr.length-1] || target < arr[0]){
        return -1
    }

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)
        if (arr[mid] === target){
            return mid
        }
        console.log (`start: ${start}, mid ${mid}, end: ${end}`)
        if (arr[mid] < target) {
            start = mid +1
        }
        else if (arr[mid] > target) {
            end = mid -1
        }
    }
    return -1
}

function findDesc (arr, target) {
    let start = 0
    let end = arr.length -1
    if (arr[start] === target) {
        return start
    }
    if (target < arr[arr.length-1] || target > arr[0]){
        return -1
    }

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)
        if (arr[mid] === target){
            return mid
        }
        console.log (`start: ${start}, mid ${mid}, end: ${end}`)
        if (arr[mid] > target) {
            start = mid +1
        }
        else if (arr[mid] < target) {
            end = mid -1
        }
    }
    return -1
}

function findFirstDesc (arr, target) {
    console.log(arr)
    let start = 0
    let end = arr.length -1
    if (arr[start] === target) {
        return start
    }
    if (target < arr[arr.length-1] || target > arr[0]){
        return -1
    }

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)
        // console.log (`start: ${start}, mid ${mid}, end: ${end}`)
        if (arr[mid] === target && arr[mid-1] != target || arr[mid] === target && arr[mid+1] != target){
            // console.log("returning mid")
            return mid
        }
        if (arr[mid+1] === target && arr[mid] != target) {
            // console.log("returning mid+1")
            return mid+1
        }
        if (arr[mid-1] === target && arr[mid] != target) {
            // console.log("returning mid-1")
            return mid-1
        }
        if (arr[mid] > target) {
            start = mid +1
            // console.log("start is now mid +1")
        }
        else if (arr[mid] <= target) {
            end = mid -1
        }
    }
    return -1
}                              
// console.log(findFirstDesc([0,0,0,0,1,1,1,2,2,3].reverse(), 2))

function findFirstAsc (arr, target) {
    let start = 0
    let end = arr.length -1
   
    if (arr[start] === target) {
        return start
    }
    if (target > arr[arr.length-1] || target < arr[0]){
        return -1
    }

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)
        // console.log (`start: ${start}, mid ${mid}, end: ${end}`)
        if (arr[mid] === target && arr[mid-1] != target ){
            // console.log("returning mid")
            return mid
        }
        if (arr[mid+1] === target && arr[mid] != target) {
            // console.log("returning mid+1")
            return mid+1
        }
        if (arr[mid-1] === target && arr[mid] != target) {
            // console.log("returning mid-1")
            return mid-1
        }
        if (arr[mid] >= target) {
            end = mid -1
        }
        else if (arr[mid] <= target) {
            start = mid +1
        }
    }
    return -1
}

function findPivot (arr) {
    let start = 0
    let end = arr.length -1
    if (arr[start] < arr[end]) {
        return -1
    }

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)
        // console.log (`start: ${start}, mid ${mid}, end: ${end}`)
        if(arr[mid] > arr[mid+1] && arr[mid] > arr[mid] -1){
            // console.log('returning mid')
            return mid
        }

        
        if (arr[mid] > arr[end]) {
            // console.log("returning mid-1")
           start = mid
        }
        else if (arr[mid] < arr[start]) {
            end = mid
        }
    }
    return -1
}
console.log(findPivot([1, 2, 3, 4]))


module.exports = {findAsc, findDesc, findFirstAsc, findFirstDesc, findPivot}