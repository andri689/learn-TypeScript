"use strict";
// Function getProperty mengambil nilai dari objek 'obj' berdasarkan kunci 'key'.
// 'T' merupakan tipe dari objek, dan 'U' adalah tipe dari kunci dalam objek 'T'.
function getProperty(obj, key) {
    return obj[key];
}
let x = { a: 1, b: 2, c: 3, d: 4 };
console.log(getProperty(x, "a")); // Output: 1
console.log(getProperty(x, "c")); // Output: 3
// console.log(getProperty(x, "z")); // ERROR: Kunci "z" tidak ada dalam objek 'x'.
