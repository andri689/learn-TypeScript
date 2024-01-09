// Interface Generics3<T> adalah sebuah generic interface yang memiliki properti propA dan methodA.
// propA adalah properti dengan tipe T, dan methodA adalah sebuah method yang mengembalikan nilai dari tipe T.
interface Generics3<T> {
    propA: T,
    methodA(): T
};

// Kelas GenericsClass<T> adalah sebuah generic class yang mengimplementasikan interface Generics3<T>.
// Kelas ini memiliki properti propA dengan tipe T dan methodA yang mengembalikan nilai dari tipe T.
class GenericsClass<T> implements Generics3<T> {
    propA: T;

    constructor(propA: T) {
        this.propA = propA;
    }

    methodA(): T {
        return this.propA;
    }
}

// Membuat objek genericClassA dari kelas GenericsClass dengan tipe data number (123).
const genericClassA = new GenericsClass<number>(123);

// Memanggil methodA dari objek genericClassA dan mencetak nilai yang dikembalikan ke konsol.
console.log(genericClassA.methodA()); // Output: 123
