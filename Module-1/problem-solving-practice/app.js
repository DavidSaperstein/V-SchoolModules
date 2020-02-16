//#1
function theBiggest (numArr) {
    let largest = 0
    for (let i = 0; i < numArr.length; i++ ) {
        if (numArr[i] > largest) {
            largest = numArr[i]
        }
    }
    return largest
}

console.log(theBiggest([1, 3, 4, 8, 56, 21, 100]))


//#2
function lettersWithStrings(strings, things) {
    let newArr = []
    for (let i = 0; i < strings.length; i++) {
        let find = strings[i].indexOf(things)
        if (find != -1) {
            newArr.push(strings[i])
        }
    }
    return newArr
}

console.log(lettersWithStrings(["what", "nope!", "yeah!", "eh"], "!"))

//#3
function isDivisible(num1, num2) {
    if (num1%num2 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isDivisible(5, 3))