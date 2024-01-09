"use strict";
// Definisi kelas ClassA dengan properti name bertipe string.
class ClassA {
    constructor() {
        this.name = 'Class A';
    }
}
// Kelas generic ClassNew<T> yang memiliki properti classP bertipe T.
class ClassNew {
    constructor(classP) {
        this.classP = classP;
    }
}
// Membuat objek classA dari kelas ClassA.
const classA = new ClassA();
// Membuat objek classNew dari kelas ClassNew dengan objek classA sebagai argumen konstruktor.
const classNew = new ClassNew(classA);
// Mencetak properti name dari objek classNew.classP ke konsol.
console.log(classNew.classP.name); // Output: 'Class A'
