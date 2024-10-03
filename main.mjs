import { HashMap } from "./index.mjs";

const test = new HashMap();

// After adding hash map with the data below, hash map’s actual capacity should now be at 0.75 (full capacity).
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
console.log(test.get('grape'));

// Test overwriting a few nodes using set(key, value)
test.set('jacket', 'leather');
test.set('kite', 'large');
test.set('lion', 'hungry');
console.log(test.get('jacket'));
console.log(test.get('kite'));
console.log(test.get('lion'));

// Test adding new node, hash map will exceed current load factor, expanding buckets and growing hash map
test.set('moon', 'silver');
console.log(`New Capacity: ${test.capacity}`);

// With new hash map, test overwriting a few nodes using set(key, value). 
test.set('moon', 'bright');
test.set('dog', 'bark');
console.log(test.get('dog'));
console.log(test.get('moon'));

// Test the other methods of hash maps such as get(key), has(key), remove(key), length(), clear(), keys(), values(), and entries() to check if they are still working as expected after expanding hash map.
console.log(test.get('apple'));       // get(key)
console.log(test.has('banana'));      // has(key)
console.log(test.has('melon')); 
test.remove('elephant');              // remove(key)
console.log(test.get('elephant'));   
console.log(test.length());           // length()
test.clear();                         // clear()
console.log(test.length()); 
console.log(test.keys());             // keys()
console.log(test.values());           // values()
console.log(test.entries());          // entries()
