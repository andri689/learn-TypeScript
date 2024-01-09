// Interface Generics adalah sebuah generic interface yang memiliki properti propA dengan tipe parameter T.
interface Generics<T> {
    propA: T;
}

// Function genericsFunction merupakan generic function yang menggunakan tipe parameter T.
// Fungsi ini menerima nilai dari tipe T dan mengembalikan objek dengan properti propA yang sesuai dengan nilai yang diberikan.
function genericsFunction<T>(value: T): Generics<T> {
    let data: Generics<T> = {
        propA: value
    };

    return data;
}

// Memanggil genericsFunction dengan tipe data string ('waduh') dan mencetak objek yang dikembalikan ke konsol.
console.log(genericsFunction<string>('waduh'));

// Memanggil genericsFunction dengan tipe data number (1234) dan mencetak objek yang dikembalikan ke konsol.
console.log(genericsFunction<number>(1234));

// Memanggil genericsFunction dengan tipe data boolean (true) dan mencetak objek yang dikembalikan ke konsol.
console.log(genericsFunction<boolean>(true));


// output 
// { propA: 'waduh' }        
// { propA: 1234 }
// { propA: true }