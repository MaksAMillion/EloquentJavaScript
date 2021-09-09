// ==================================================
// Write a function arrayToList that builds up a list
// structure like the one shown when given [1, 2, 3]
// as argument. 
// ==================================================

let inputArray = [1, 2, 3]; 

function arrayToList(arrayInput) {
    let tempList;
        
    while (arrayInput.length > 0) {
        if (tempList === undefined) {
            tempList = {
                value: arrayInput.pop(),
                rest: null
            };
        }
        else {
            tempList = {
                value: arrayInput.pop(),
                rest: tempList
            };
        }
    }

    return tempList;
}

// =======================================
// Also write a listToArray function that
// produces an array from a list.
// =======================================

const listToArray = function(inputList) {
    let newArray = [];
    
    while (inputList != null) {
        newArray.push(inputList.value);
        inputList = inputList.rest;
    }

    return newArray;
};


// ===================================================
// Then add a helper function prepend, which takes an
// element and a list and creates a new list that adds
// the element to the front of the input list, and
// nth, which takes a list and a number and returns
// the element at the given position in the list (with
// zero referring to the first element) or undefined
// when there is no such element.
// ===================================================

const prepend = (element, existingList) => {
    existingList = {
        value: element,
        rest: existingList
    };

    return existingList;
}

const nth = (userList, aNumber) => {
    if (userList === null) {
        return undefined;
    }

    let value = userList.value;
        
    if (aNumber == 0) {
        aNumber--;
        return value;
    }
    else {
        aNumber--;
        return nth(userList.rest, aNumber);
    }
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20