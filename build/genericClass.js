"use strict";
class List {
    constructor(...elements) {
        this.data = elements;
    }
    add(elements) {
        this.data.push(elements);
    }
    addMultiple(...elements) {
        this.data.push(...elements);
    }
    getAll() {
        return this.data;
    }
}
// let numbers = new List<number>(1, 2, 3);
// numbers.add(4); // menambah angka 4
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll()); // output 1, 2, 3, 4, 5, 6, 7
let random = new List(1, "a", "b", 2);
random.add("sasa");
random.add(89);
random.addMultiple(321, "wq");
console.log(random.getAll());
// output
//  [
//     1,      'a',
//     'b',    2,
//     'sasa', 89,
//     321,    'wq'
//   ]
