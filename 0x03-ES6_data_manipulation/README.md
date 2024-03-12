0x03-ES6_data_manipulation

LEARNING OUTCOMES, What i learned from the materials provided
Map, Filter, and Reduce on Arrays:

Map: The map function is used to transform each element of an array according to a provided function. It creates a new array with the results of calling the function on each element of the original array. For example:

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
// doubled is now [2, 4, 6, 8]

Filter: The filter function is used to create a new array with all elements that pass a certain condition specified by a provided function. For example:

const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
// evens is now [2, 4]

Reduce: The reduce function applies a function against an accumulator and each element in the array (from left to right) to reduce it to a single value. For example:

const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// sum is now 10


2. Typed arraya
Typed Arrays provide a way to work with raw binary data in JavaScript. Unlike regular arrays, which can hold any type of value, typed arrays are designed to hold a specific type of data, such as integers or floats, in a fixed-size buffer. They are especially useful when dealing with binary data, such as when working with WebGL or manipulating files. Examples of typed arrays include Int8Array, Uint8Array, Float32Array, etc.

3. Set, Map, and WeakLink Data Structures:

Set: A Set is a collection of unique values, meaning that any value can only occur once in a set. It can be used to remove duplicates from an array or to quickly check for the presence of a value. Example usage:

const mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Adding duplicate value, but it won't be added
// mySet is now {1, 2}

Map: A Map is a collection of key-value pairs where each key can only occur once. It's similar to an object, but with some differences, such as allowing any type of value as a key. Example usage:

const myMap = new Map();
myMap.set('a', 1);
myMap.set('b', 2);
// myMap is now {'a' => 1, 'b' => 2}

WeakLink: WeakMap and WeakSet are similar to Map and Set, respectively, but they allow only objects as keys (not primitives), and they don't prevent the objects they reference from being garbage-collected if there are no other references to those objects in memory. This can be useful for implementing caches or managing metadata for objects without preventing them from being cleaned up by the garbage collector. Example usage:

const weakMap = new WeakMap();
const key = {};
weakMap.set(key, 'value');
// If there are no other references to key, it can be garbage-collected, and the value will be removed from the WeakMap automatically.

