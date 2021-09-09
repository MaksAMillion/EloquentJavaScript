class Group {
    constructor() {
        this.group = [];
    }

    add(value) {
        // checks if value exists
        if (!this.group.includes(value)) {
            this.group.push(value);
        }
    }

    delete(value) {
        let indexOfvalue = this.group.indexOf(value);

        if (indexOfvalue > -1) {
            this.group.splice(indexOfvalue, 1);
        }
    }

    has = function(number) {
        return this.group.includes(number);   
    }

    static from(iterableObject) {
        let fromGroup = new Group();

        iterableObject.forEach(element => {
            fromGroup.group.push(element);
        });

        return fromGroup;
    }
}

class GroupIterator {
    constructor(group) {
        this.index = 0;
        this.group = group;
    }

    next() {
        if (this.index == this.group.group.length) {
            return {done: true};
        }

        let value = this.group.group[this.index];
        
        this.index++;

        return {value, done: false}
    }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
};

for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
}

// -> a
// -> b
// -> c