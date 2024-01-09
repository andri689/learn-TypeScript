"use strict";
// return type pada sebuah method berfungsi untuk membatasi atau mengatur tipe apa yang akan didirikan sebuah method
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Burung {
    constructor() {
        this.kaki = 2; // Properti kaki dengan nilai default 2
    }
    // Metode untuk mendapatkan jumlah kaki burung
    getKaki() {
        return this.kaki; // Mengembalikan nilai properti kaki
    }
    // Metode untuk menggambarkan aksi terbang burung
    terbang() {
        console.log('terbang'); // Mencetak 'terbang' ke konsol
    }
    // Metode async makan yang mengembalikan Promise dengan nilai number
    makan() {
        return __awaiter(this, void 0, void 0, function* () {
            return 54321; // Mengembalikan nilai 54321 sebagai Promise<number>
        });
    }
}
// Membuat objek dari kelas Burung
const burung3 = new Burung();
// Menggunakan metode getKaki() untuk mendapatkan jumlah kaki burung
const jumlahKaki = burung3.getKaki();
console.log(`Burung memiliki ${jumlahKaki} kaki.`);
// Memanggil metode terbang() untuk menggambarkan aksi terbang burung
burung3.terbang();
// Menggunakan metode makan() yang bersifat asynchronous
burung3.makan().then((nilai) => {
    console.log(`Burung selesai makan dengan nilai ${nilai}.`);
}).catch((error) => {
    console.error('Ada kesalahan dalam proses makan:', error);
});
// output 
// Burung memiliki 2 kaki.
// terbang
// Burung selesai makan dengan nilai 54321.
