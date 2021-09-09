let isEven = (N) => {
    if (N < 0) {
        return false;
    } else if (N === 0)
    {
        return true;
    } else if (N === 1) {
        return false;
    }
    else {
        return isEven(N - 2);
    }
};

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));