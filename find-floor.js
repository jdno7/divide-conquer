function findFloor(arr, num) {
    let start = 0
    let end = arr.length -1
   
    if (arr[start] === num) {
        return start
    }
    if (arr[end] === num) {
        return start
    }
    if (num > arr[end]){
        return arr[end]
    }
    if (num < arr[start]){
        return -1
    }

    while (start <= end) {
        let mid = start + Math.floor((end-start)/2)

        if (arr[mid] <= num && arr[mid] < num && arr[mid+1] > num || arr[mid] <= num && arr[mid] > num && arr[mid-1] < num){
            return arr[mid]
        }
        if (arr[mid] >= num) {
            end = mid -1
        }
        else if (arr[mid] <= num) {
            start = mid +1
        }
    }
    return -1
}


module.exports = findFloor