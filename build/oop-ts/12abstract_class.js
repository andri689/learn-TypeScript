"use strict";
// abstract class ini adalah sebuah kelas yang tidak bisa diinstansiasi secara langsung oleh klien karena memang bentuknya dari abstrak 
// abstrak class ini masih belum jelas karena memang abstrak jadi abstrak class ini bisa juga sebagai tempalate yang dimana dis setiap kelas yenag mengekstensinya harus 
// mengimplementasikan method yang sudah ditentukan oleh abstrak class ini jadi terus ada aturannya lagi pada abstrak class ini harus ada satu abstrak
// Definisi kelas abstrak Hewan12
class Hewan12 {
    constructor(name) {
        this.name = name;
    }
    // Metode makan() untuk mencetak pesan bahwa hewan sedang makan
    makan() {
        console.log(`${this.name} sedang makan`);
    }
}
// Kelas turunan Kucing12 dari kelas Hewan12
class Kucing12 extends Hewan12 {
    constructor() {
        super('kucing'); // Mengatur nama hewan saat membuat objek Kucing12
    }
    // Implementasi metode bergerak() khusus untuk kucing
    bergerak() {
        console.log('kucing berjalan');
    }
}
// Kelas turunan Burung12 dari kelas Hewan12
class Burung12 extends Hewan12 {
    constructor() {
        super('Burung'); // Mengatur nama hewan saat membuat objek Burung12
    }
    // Implementasi metode bergerak() khusus untuk burung
    bergerak() {
        console.log('Burung Terbang');
    }
}
// Membuat objek Kucing12 dan memanggil metode bergerak() untuk kucing
const kucing12 = new Kucing12();
kucing12.bergerak(); // Output: kucing berjalan
// Membuat objek Burung12 dan memanggil metode bergerak() untuk burung
const burung12 = new Burung12();
burung12.bergerak(); // Output: Burung Terbang
// output
// kucing berjalan
// Burung Terbang
