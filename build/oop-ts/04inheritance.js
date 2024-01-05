"use strict";
// inheritance atau pewarisan adalah sebuah konsep yang dimana sebuah class bisa menurunkan property atau methodnya kepada class lain yang meng extends atau mengikutinya
// dapat menurunkan class parent/induk ke class child/anaknya
class hewan4 {
    constructor() {
        this.nama = '';
        this.kaki = 0;
    }
    bernafas() {
        console.log('nafas');
    }
}
class Burung4 extends hewan4 {
    constructor() {
        super(...arguments);
        this.warna = 'merah';
    }
}
const BURUNG4 = new Burung4();
BURUNG4.nama = 'kenari';
BURUNG4.kaki = 2;
BURUNG4.warna = 'kuning';
console.log(BURUNG4);
BURUNG4.bernafas();
// output 
// Burung4 { nama: 'kenari', kaki: 2, warna: 'kuning' }
// nafas
