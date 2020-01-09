function sum (a,b) {
    console.log(a + b)
}

sum (2,3)

function theBiggest(a = 2 ,b,c) {
    if (a > b && a > c) {
        console.log(a)
    } else if (b > a && b > c) {
        console.log(b)
    } else {
        console.log(c)
    }
}

theBiggest(3,6,1)


function areYouEvenOddBro(num1) {
    num1%2 == 0 ? console.log(num1 + " is even") : console.log(num1 + " is odd")
}

areYouEvenOddBro(7)

function stringy(string) {
    if (string.length <= 20) {
        var newString = string.concat(string);
        console.log(newString)
    } else {
        var halfString = Math.ceil(string.substr(0,string.length / 2));
        // var newString = string.substr(0, string / 2)
        console.log(halfString)

    }
}
stringy("david")
stringy("threethreethreethreethree")