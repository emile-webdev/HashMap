class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.nextNode = null;
    }
}

class HashMap {
    constructor(capacity = 16, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.size = 0;
        this.bucketArray = new Array(this.capacity);
    }

    // Throw an error if we try to access an out of bound index
    checkIndex(index){
        if (index < 0 || index >= this.bucketArray.length) {
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
        let bucketIndex = this.hash(key) % this.capacity;
        this.checkIndex(bucketIndex);

        if (!this.bucketArray[bucketIndex]) {
            this.bucketArray[bucketIndex] = new Node(key, value);
            this.size++;
        } else {
            let node = this.bucketArray[bucketIndex];

            while(node) {
                if (node.key === key) {
                    node.value = value;
                    return;
                } else if (!node.nextNode) {
                    node.nextNode = new Node(key, value);
                    this.size++;
                    break;
                }
                node = node.nextNode;
            }
        }
    }

    // Takes one argument as a key and returns the value that is assigned to this key
    get(key) {
        let bucketIndex = this.hash(key) % this.capacity;
        this.checkIndex(bucketIndex);

        if (this.bucketArray[bucketIndex]) {
            let node = this.bucketArray[bucketIndex];

            while(node) {
                if(node.key === key) {
                    return node.value;
                } 
                node = node.nextNode;
            }
        }
        return null;
    }

    // Takes a key as an argument and returns true or false based on whether or not the key is in the hash map
    has(key) {
        let bucketIndex = this.hash(key) % this.capacity;
        this.checkIndex(bucketIndex);

        if (this.bucketArray[bucketIndex]) {
            let node = this.bucketArray[bucketIndex];

            while(node) {
                if (node.key === key) {
                    return true;
                }
                node = node.nextNode;
            }
        }
        return false;
    }

    // If the given key is in the hash map, remove the entry with that key and return true. If the key isn’t in the hash map, return false
    remove(key) {
        let bucketIndex = this.hash(key) % this.capacity;
        this.checkIndex(bucketIndex);

        if (this.bucketArray[bucketIndex]) {
            if (this.bucketArray[bucketIndex].key === key) {
                this.bucketArray[bucketIndex] = this.bucketArray[bucketIndex].nextNode;
                this.size--;
            } else {
                let node = this.bucketArray[bucketIndex];
                let previousNode = null;

                while(node) {
                    if (node.key === key) {
                        if (previousNode) {
                            previousNode.nextNode = node.nextNode;
                        }
                        this.size--;
                        break;
                    }
                    previousNode = node;
                    node = node.nextNode;
                }
            }
            return true;
        }
        return false;
    }

    // Returns the number of stored keys in the hash map
    length() {
        return this.size;
    }

    // Removes all entries in the hash map
    clear() {
        this.capacity = 16;
        this.bucketArray = new Array(this.capacity);
        this. size = 0;
    }

    // Returns an array containing all the keys inside the hash map
    keys() {
        const keysArray = [];

        this.bucketArray.forEach(node => {
            while(node) {
                keysArray.push(node.key);
                node = node.nextNode;
            }
        })
        return keysArray;
    }

    // Returns an array containing all the values
    values() {
        const valuesArray = [];

        this.bucketArray.forEach(node => {
            while(node) {
                valuesArray.push(node.value);
                node = node.nextNode;
            }
        })
        return valuesArray;
    }

    // Returns an array that contains each key, value pair
    entries() {
        const keysValuesArray = [];

        this.bucketArray.forEach(node => {
            while(node) {
                keysValuesArray.push([node.key, node.value]);
                node = node.nextNode;
            }
        })
        return keysValuesArray;
    }
}

export {
    HashMap
}