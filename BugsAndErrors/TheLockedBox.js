// It is a box with a lock. There is an array in the
// box, but you can get at it only when the box is
// unlocked. Directly accessing the private _content
// property is forbidden.

// Write a function called withBoxUnblocked that takes
// a function value as argument, unlocks the box, runs
// the function, and then ensures that the box is
// locked again before returning, regardless of whether
// the argument function returned normally or threw
// an exception.

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true; },
    _content: [],
    getContent() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    try {
        box.unlock();
        // console.log(`Check status lock: ${ box.locked }, // has been unlocked`);
        body();
        // console.log("getContent function output", box.getContent());
        box.lock();
        // console.log(`Check status lock: ${ box.locked }, // has been locked`);    
    } catch (e) {
        // console.log("Error raised lock the box if unlocked");
        box.lock();
        // console.log(`Check status lock: ${ box.locked }, // has been locked`);
    }
}

withBoxUnlocked(function() {
    box._content.push("gold piece");
});

try {
    withBoxUnlocked(function() {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised: " + e);
}

console.log(box.locked);
// -> true

// For extra points, make sure that if you call
// withBoxUnlocked when the box is already unlocked,
// the box stays unlocked.