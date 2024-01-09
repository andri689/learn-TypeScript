// Generic constraints di TypeScript memungkinkan Anda untuk membatasi tipe data yang dapat digunakan dalam sebuah generic. Dengan menetapkan constraints, Anda dapat menegaskan persyaratan 
// tambahan terkait tipe data yang digunakan. Misalnya, Anda bisa memastikan bahwa tipe data yang digunakan dalam generic memiliki properti atau method tertentu yang diperlukan oleh implementasi 
// generic tersebut. Ini membantu membuat penggunaan generic menjadi lebih spesifik dan terarah.

// generic constraints yang mana kita bisa mengakses options dari dalam sebuah generic function maka 

// function generics24<P>(arg: P): P {
//     // console.log(arg.length);
//     return arg;
// }

// Interface Length digunakan untuk memastikan bahwa tipe data yang digunakan memiliki properti length yang bertipe number.
interface Length {
    length: number;
}

// Fungsi generics24 menggunakan generic type P yang diperluas (extends) dengan interface Length.
// Ini memastikan bahwa argumen yang diterima memiliki properti length yang bertipe number.
function generics24<P extends Length>(arg: P): P {
    console.log(arg.length); // Mencetak nilai length dari argumen ke konsol.
    return arg; // Mengembalikan argumen yang diterima tanpa perubahan.
}

// Memanggil generics24 dengan argumen string 'hihi' yang tidak memiliki properti length.
// Hal ini akan menghasilkan kesalahan saat kompilasi karena string tidak memiliki properti length.
const generics24a = generics24('hihi');
console.log(generics24a);

// Memanggil generics24 dengan objek yang memiliki properti length dan properti lainnya.
// Objek ini sesuai dengan kriteria interface Length, sehingga tidak akan menyebabkan kesalahan.
const generics24b = generics24({ length: 10, value: 200 });

// output
// 4
// hihi
// 10
