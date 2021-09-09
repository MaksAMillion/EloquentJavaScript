// Write a function min that takes two arguments
// and returns their minimum.

let min = function(value1, value2) {
    if (value1 < value2)
    {
        return value1;
    } else {
        return value2;
    }
};

console.log(min(0, 10));
console.log(min(0, -10));