"use strict";
// Ketika kita menggunakan extends pada sebuah interface di TypeScript untuk memperluas interface tersebut dengan properti dan metode dari sebuah kelas, kita membuat sebuah interface yang mewarisi struktur dari kelas tersebut. 
// Kelas Animal yang memiliki properti name dan konstruktor untuk menginisialisasi nama hewan
class Animal {
    constructor(name) {
        this.name = name;
    }
}
// Kelas Shark yang mengimplementasikan interface IShark
class Shark {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log('berenang');
    }
}
// Membuat objek dari kelas Shark
const shark = new Shark('Hiu');
// Mencetak informasi tentang objek Shark ke konsol
console.log(`Nama Hewan: ${shark.name}`);
shark.swim(); // Memanggil metode swim pada objek shark
// output
// Nama Hewan: Hiu
// berenang
