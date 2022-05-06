

const countZeroes = (arr) => {
    const start = arr.findIndex(num => num === 0)
    if (start === 0) arr.length
    const numOfZeroes = (arr.length) - start
    console.log(numOfZeroes)
    return numOfZeroes 
}

countZeroes([0,0,0,0,0])
