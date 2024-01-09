"use strict";
// generic ini menjadikan sebuah function atau class atau interface memmiliki berbagai macam tipe data yang lebih dinamis
// Function getData1 mengambil argumen value dan mengembalikan nilai yang diterima tanpa memperhatikan tipe data yang diberikan.
function getData1(value) {
    return value;
}
// Memanggil getData1 dengan nilai numerik 12345 dan mencetak nilai yang dikembalikan ke konsol.
const data1 = getData1(12345);
console.log(data1); // Output: 12345
// --------------------------------------------
// Function getData2 merupakan generic function yang menggunakan tipe parameter <T>.
// Ini memungkinkan penggunaan fungsi dengan berbagai tipe data tanpa harus secara langsung menentukan tipe data saat penggunaan.
function getData2(value) {
    return value;
}
// Menggunakan getData2 dengan tipe data string ("Test") dan mengakses properti length dari string yang dikembalikan.
const data2 = getData2("Test");
console.log(data2.length); // Output: 4 (Panjang string "Test" adalah 4)
// Menggunakan getData2 dengan tipe data numerik (1234) dan menggunakan method toFixed(2) dari tipe data numerik yang dikembalikan.
const data21 = getData2(1234);
console.log(data21.toFixed(2)); // Output: "1234.00" (Angka 1234 diformat dengan dua desimal)
