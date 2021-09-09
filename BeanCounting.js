let countBs = (string) => {
    return countChar(string, 'B');
};

let countChar = (string, targetCharacter = 'B') => {
    let stringLength = string.length;
    let matchCount = 0;

    for (let i = 0; i < stringLength; i++) {
        if (string[i] === targetCharacter) {
            matchCount++;
        }
    }
    
    return matchCount;
};

console.log(countChar("BABY"));
console.log(countBs("BBC"));
console.log(countChar("kakkerlak", "k"));