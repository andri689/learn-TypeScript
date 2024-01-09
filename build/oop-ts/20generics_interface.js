"use strict";
// Function genericsFunction merupakan generic function yang menggunakan tipe parameter T.
// Fungsi ini menerima nilai dari tipe T dan mengembalikan objek dengan properti propA yang sesuai dengan nilai yang diberikan.
function genericsFunction(value) {
    let data = {
        propA: value
    };
    return data;
}
// Memanggil genericsFunction dengan tipe data string ('waduh') dan mencetak objek yang dikembalikan ke konsol.
console.log(genericsFunction('waduh'));
// Memanggil genericsFunction dengan tipe data number (1234) dan mencetak objek yang dikembalikan ke konsol.
console.log(genericsFunction(1234));
// Memanggil genericsFunction dengan tipe data boolean (true) dan mencetak objek yang dikembalikan ke konsol.
console.log(genericsFunction(true));
// output 
// { propA: 'waduh' }        
// { propA: 1234 }
// { propA: true }
