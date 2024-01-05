"use strict";
class Hewan4 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const burung = new Hewan4('burung', 2);
console.log(burung); // output Hewan4 { nama: 'burung', kaki: 2 }
// --- Contoh 2 Hasil Sama dengan class yang digabung-------------- //
class Hewan41 {
    constructor(nama, kaki) {
        this.nama = nama;
        this.kaki = kaki;
    }
}
const burung2 = new Hewan41('burung', 2);
console.log(burung2); // output Hewan41 { nama: 'burung', kaki: 2 } 
