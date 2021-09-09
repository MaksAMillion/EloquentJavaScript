// Use the reduce method in combination with the concat
// method to "flatten" an array of arrays into a single
// array that has all the elements of the original 
// arrays.

function flatten(userArray) {
    let tempArray = userArray.reduce((n, newArray) => n.concat(newArray));

    return tempArray;
}

let arrays = [[1, 2, 3], [4, 5], [6]];

console.log(flatten(arrays));