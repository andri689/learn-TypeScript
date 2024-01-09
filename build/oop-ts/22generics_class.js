"use strict";
;
// Kelas GenericsClass<T> adalah sebuah generic class yang mengimplementasikan interface Generics3<T>.
// Kelas ini memiliki properti propA dengan tipe T dan methodA yang mengembalikan nilai dari tipe T.
class GenericsClass {
    constructor(propA) {
        this.propA = propA;
    }
    methodA() {
        return this.propA;
    }
}
// Membuat objek genericClassA dari kelas GenericsClass dengan tipe data number (123).
const genericClassA = new GenericsClass(123);
// Memanggil methodA dari objek genericClassA dan mencetak nilai yang dikembalikan ke konsol.
console.log(genericClassA.methodA()); // Output: 123
