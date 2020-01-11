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
        if (string.lengh%2 === 0) {
            var halfString = string.substring(0, string.length/2);
        }
        else {
            var newString = string.substring(0, string.length/2+1);
            console.log(newString)
             }

    }
}
stringy("david")
stringy("threethreethreethreethree")

function fibonacci(n) {
    let fibAdd = 0
    let fibSum = 0
    for (i = 0; i < n; i++) {
        if (i === 0) {
            var fibArray = [1];
            fibSum += fibArray[i]; 
        }  else if (fibArray.length === 1) {
            fibArray.push(1);
            fibSum += fibArray[i];

        } else {
                fibAdd = fibArray[i-1] + fibArray[i-2];
                fibArray.push(fibAdd);
                fibSum += fibArray[i];                
        }
    }
    console.log(fibArray) + console.log(fibSum)           
    }


fibonacci(6)