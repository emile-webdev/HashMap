class HashMap {
    constructor() {

    }

    // Throw an error if we try to access an out of bound index
    checkIndex(index){
        if(index < 0 || index >= this.buckets.length){
            throw new Error("Trying to access index out of bound")
        }
    }

    // Takes a key and produces a hash code with it
    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;

        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    } 

    // Takes two arguments, a key and a value that is assigned to this key
    set(key, value) {
        
    }

    // Takes one argument as a key and returns the value that is assigned to this key
    get(key) {
        
    }

    // Takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {

    }

    // If the given key is in the hash map, remove the entry with that key and return true. If the key isn’t in the hash map, return false
    remove(key) {

    }

    // Returns the number of stored keys in the hash map
    length() {

    }

    // Removes all entries in the hash map
    clear() {

    }

    // Returns an array containing all the keys inside the hash map
    keys() {

    }

    // Returns an array containing all the values
    values() {

    }

    // Returns an array that contains each key, value pair
    entries() {

    }
}

export {
    HashMap
}