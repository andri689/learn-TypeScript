"use strict";
class Hewan3 {
    constructor() {
        this.nama = '';
        this.kaki = 0;
        this.mamalia = false;
    }
    bernafas() {
        console.log(`$(this.nama) sedang bernafas`);
    }
}
const hewan3 = new Hewan3();
console.log(hewan3); // ini console hewan3 object kosong / default value
// output Hewan3 { nama: '', kaki: 0, mamalia: false }
hewan3.nama = 'katak';
hewan3.kaki = 4;
console.log(hewan3); // ini dari object yang sudah dimanipulasi datanya prperty dan method
// output Hewan3 { nama: 'katak', kaki: 4, mamalia: false } $(this.nama) sedang bernafas
hewan3.bernafas();
