function getLargestNumber(array, n) {
    let largestElement;
    if (Array.isArray(array)) {                                                 // To check input array is array or not
        if (array && array.length && n > 0) {                                  // To avoid empty array and negative integer input
            for (let i = 0; i < array.length; i++) {
                if (typeof array[i] !== 'number') {                            // To check array values are numbers or string                             
                    return "Please provide array values as number.";
                } else if (!Number.isInteger(array[i]) || array[i] < 0) {      // To avoid array values as negative input and decimal input  
                    return "Please provide array values as positive integer.";
                } else {
                    let element = array[i];
                    if (element % n === 0) {
                        let newElement = element / n;
                        let resultArray = [];
                        resultArray.push(factorial(newElement));
                        largestElement = Math.max.apply(null, resultArray);
                    }
                }
            }
            return largestElement;
        } else {
            return "Please Enter values in array or positive value as integer.";
        }
    } else {
        return "Please enter your input as an array";
    }
}
function factorial(x) {
    if (x == 0) {
        return 1;
    } else {
        return x * factorial(x - 1);
    }
}

