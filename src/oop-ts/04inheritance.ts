// inheritance atau pewarisan adalah sebuah konsep yang dimana sebuah class bisa menurunkan property atau methodnya kepada class lain yang meng extends atau mengikutinya
// dapat menurunkan class parent/induk ke class child/anaknya

class hewan4 { // class hewan4 sebagai class induk
    nama: string = '';
    kaki: number = 0;

    bernafas() {
        console.log('nafas');
    }
}

class Burung4 extends hewan4 { // class Burung4 sebagai class anak, extends hewan4 sehingga Brung2 bagian dari class hewan4 sebagai bagian dari hewan4 dapat mengambil property yang ada di class hewan4
    warna: string = 'merah';
}

const BURUNG4 = new  Burung4();
BURUNG4.nama = 'kenari';
BURUNG4.kaki = 2;
BURUNG4.warna = 'kuning'
console.log(BURUNG4);

BURUNG4.bernafas();

// output 
// Burung4 { nama: 'kenari', kaki: 2, warna: 'kuning' }
// nafas
