"use strict";
// tipe data pada return function 
function getName() {
    return "Halo, my name is Andrian";
}
console.log(getName());
function getAge() {
    return 18;
}
console.log(getAge());
function prinName() {
    console.log("print name andrian");
    //return "ada" // apabila ada return maka akan eror karena void tidak mereturn apa-apa
}
prinName(); // output  print name andrian
//////////////////////////////////////////////////
// argument as type
function perkalian(val1, val2) {
    return val1 * val2;
}
const kali = perkalian(5, 5); // apabila diisi dengan tipe data string akan eror
console.log(kali); // output 25
function penjumlahan(val1, val2) {
    return val1 + val2;
}
const tambah = penjumlahan(5, 5); // apabila diisi dengan tipe data string akan eror
console.log(tambah); // output 10
function pengurangan(val1, val2) {
    return val1 - val2;
}
const kurang = pengurangan(20, 5); // apabila diisi dengan tipe data string akan eror
console.log(kurang); // output 15
function pembagian(val1, val2) {
    return val1 / val2;
}
const bagi = pembagian(30, 5); // apabila diisi dengan tipe data string akan eror
console.log(bagi); // output 6
const Add = (no1, no2) => {
    return no1 + no2;
};
const Hasil = Add(100, 5); // Memanggil fungsi Add
console.log(Hasil); // Output: 10
// default function parameter
const fulName = (first, last = "Dwi") => {
    return first + " " + last;
};
console.log(fulName("Andrian"));
//console.log(fulName("Andrian","Nugroho")); // output Andrian Nugroho
// Optional function parameter
const getUmur = (value1, value2) => {
    return value1 + value2;
    // return value1 + " " + value2; // output 15 3
};
console.log(getUmur(15, 3)); //output 18
