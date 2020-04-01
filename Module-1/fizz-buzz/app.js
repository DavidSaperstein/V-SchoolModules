const fizzBuzz = (num) => {
    for (i=0; i < num; i++) {
        if (i%3 === 0 && i%5 != 0) {
            console.log(`fizz`)
        } else if (i%3 === 0 && i%5 === 0) {
            console.log(`fizzbuzz`)
        } else if (i%3 != 0 && i%5 === 0) {
            console.log(`buzz`)
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(20)

// x/3 == fizz
// x/5 == buzz
// x/3 + x/5

