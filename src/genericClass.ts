class List <T> {
    private data: T[];

    constructor(...elements: T[]) {
        this.data = elements;
    }

    add(elements: T): void {
        this.data.push(elements);
    }

    addMultiple(...elements: T[]): void {
        this.data.push(...elements);
    }

    getAll(): T[] {
        return this.data;
    }
}

// let numbers = new List<number>(1, 2, 3);
// numbers.add(4); // menambah angka 4
// numbers.addMultiple(5, 6, 7);
// console.log(numbers.getAll()); // output 1, 2, 3, 4, 5, 6, 7

let random = new List<number | string>(1, "a", "b", 2);
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