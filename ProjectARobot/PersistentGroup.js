// Arrays have slice and concat methods, which allow us to easily create
// new arrays without damaging the ole one. But Set, for example, has no
// methods for creating a new set with an item added or removed.

// Write a new class PGroup, similar to the Group class from Chapter 6,
// which stores a set of values. Like Group, it has add, delete, and has
// methods.

// Its add method, however, should return a new PGroup instance with the
// given member added and leave the old one unchanged. Similarly, delete
// creates a new instance without a given member.


// The class should work for values of any type, not just strings. It
// does not have to be efficient when used with large amounts of values.

// The constructor shouldn't be part of the class' interface (though
// you'll definitely want to use it internally). Instead, there is an
// empty instance, PGroup.empty, that can be used as a starting value.

// Why do you need only one PGroup.empty value, rather than having a
// function that creates a new, empty map every time?

class PGroup {
    constructor() {
        this.pgroup = []
    }

    add = function(value) {
        let newInstance = PGroup.empty

        for (let index = 0; index < this.pgroup.length; index++)
        {
            newInstance.pgroup.push(this.pgroup[index])
        }

        if (!newInstance.pgroup.includes(value)) {
            newInstance.pgroup.push(value)
        }

        return newInstance;
    }

    delete(value) {
        let newPGGroup = PGroup.empty;

        for (let index = 0; index < this.pgroup.length; index++)
        {
            newPGGroup.pgroup.push(this.pgroup[index])
        }
        
        let indexOfvalue = newPGGroup.pgroup.indexOf(value);
        
        if (indexOfvalue > -1) {
            newPGGroup.pgroup.splice(indexOfvalue, 1)
        }
        
        return newPGGroup
    }

    has(value) {
        let exists = this.pgroup.includes(value)
        
        return exists
    }

    static get empty() {
        return new PGroup(); 
    }

}

let a = PGroup.empty.add("a");
let ab = a.add("b");
let b = ab.delete("a");


console.log(b.has("b"));
// -> true
console.log(a.has("b"));
// -> false
console.log(b.has("a"));
// -> false