// Write a function deepEqual that takes two values and
// returns true only if they are the same value or are
// objects with the same properties, where the values of
// the properties are equal when compared with a
// recursive call to deepEqual.

const deepEqual = ( value1, value2 )=> {
    let propertiesCheck = false;

    if ((typeof value1) == "object" && value1 != null && (typeof value2) == "object" && value2 != null) {
        if (Object.keys(value1).length === Object.keys(value2).length) {
            for (let objectKey of Object.keys(value1)) {
                if (value2[objectKey] == undefined ) {
                    return false;
                }
                else {
                    return deepEqual(value1[objectKey], value2[objectKey]);
                }
            }
            return true;
        }
        return false;
    }
    else {
        return value1 === value2;
    }
}

// To find out whether values should be compared
// directly (use the === operator for that) or have 
// their properties compared, you can use the 
// typeof operator. If it produces "object"for both
// values, you should do a deep comparison. But you 
// have to take one silly exception into account: 
// because of a historical accident, typeof null
// also produces "object".

let obj = { 
    here: {
        is: "an" },
    object: 2
};
console.log(deepEqual(obj, obj));
console.log(deepEqual(obj, {here: 1, object: 2}));
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
console.log(deepEqual(obj, {how: {elephant: "hi"}}));
console.log(deepEqual({how: {elephant: "hi"}},{how: {elephant: "hi"}}));