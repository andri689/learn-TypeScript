"use strict";
// Definisi kelas Store untuk menyimpan informasi nama dan profit
class Store {
    constructor() {
        this.name = 'Store A';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
// Definisi kelas Store2 dengan informasi nama dan profit yang berbeda
class Store2 {
    constructor() {
        this.name = 'Store B';
        this.profit = 10000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
// Definisi kelas FashionProduct untuk produk fashion yang menggunakan informasi dari kelas Store
class FashionProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store = new Store();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
// Definisi kelas TechProduct untuk produk teknologi yang menggunakan informasi dari kelas Store2
class TechProduct {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.store2 = new Store2();
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store2.getProfit() + this.price}`);
    }
}
// Membuat objek FashionProduct dan TechProduct serta menjalankan method sell()
const baju = new FashionProduct('baju lengan panjang', 50000);
baju.sell(); // output: baju lengan panjang harga jualnya adalah 51000
const kaos = new TechProduct('kaos lengan panjang', 60000);
kaos.sell(); // output: kaos lengan panjang harga jualnya adalah 70000
// Kelas TokoLama yang mengimplementasikan interface IStore
class TokoLama {
    constructor() {
        this.name = 'Toko Lama';
        this.profit = 1000;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
// Kelas TokoBaru yang juga mengimplementasikan interface IStore
class TokoBaru {
    constructor() {
        this.name = 'Toko Baru';
        this.profit = 2500;
    }
    getName() {
        return this.name;
    }
    getProfit() {
        return this.profit;
    }
}
// Definisi kelas HijabProduct yang menggunakan dependency injection untuk mendapatkan informasi dari toko
class HijabProduct {
    constructor(store, name, price) {
        this.name = name;
        this.price = price;
        this.store = store;
    }
    sell() {
        console.log(`${this.name} harga jualnya adalah ${this.store.getProfit() + this.price}`);
    }
}
// Membuat objek dari kelas TokoLama dan TokoBaru
const tokoLama = new TokoLama();
const tokoBaru = new TokoBaru();
// Membuat objek HijabProduct yang menggunakan informasi dari TokoLama dan TokoBaru dan menjalankan method sell()
const hijabMahal = new HijabProduct(tokoLama, 'baju mahal', 80000);
const hijabMahal2 = new HijabProduct(tokoBaru, 'baju mahal', 80000);
console.log(hijabMahal);
console.log(hijabMahal2);
hijabMahal.sell(); // output: baju mahal harga jualnya adalah 81000
hijabMahal2.sell(); // output: baju mahal harga jualnya adalah 82500
// Dependency Injection (DI) adalah sebuah desain atau pola pengembangan perangkat lunak di mana 
// komponen-komponen dalam sebuah sistem tidak membuat ketergantungan langsung pada komponen lainnya, 
// tetapi bergantung pada abstraksi atau kontrak yang diimplementasikan secara eksternal. Dalam konteks 
// TypeScript atau pemrograman objek lainnya, ini sering kali dilakukan melalui konstruktor atau metode 
// untuk memasukkan objek eksternal ke dalam kelas.
// Misalnya, dalam contoh kita sebelumnya, kelas HijabProduct menerima objek toko sebagai parameter melalui
//  konstruktor (constructor(store: IStore, name: string, price: number)). Dengan cara ini, kelas HijabProduct 
//  tidak membuat instance TokoLama atau TokoBaru secara langsung, tetapi menerima objek toko dari luar 
//  (dalam hal ini tokoLama dan tokoBaru) yang mengimplementasikan interface IStore.
// Ini membantu dalam memisahkan logika kelas HijabProduct dari pembuatan dan jenis toko tertentu. Sebagai contoh, 
// jika di masa depan Anda ingin menggunakan toko lain dengan aturan profit yang berbeda, Anda dapat membuat kelas baru 
// yang mengimplementasikan interface IStore dan menggunakannya dalam HijabProduct tanpa perlu mengubah logika dari HijabProduct 
// itu sendiri. Ini mengikuti prinsip "inversion of control" di mana kontrol atas objek-objek yang digunakan terletak di luar kelas yang memakainya.
// Dengan menggunakan Dependency Injection, kode menjadi lebih modular, mudah diuji, dan lebih mudah untuk diperluas atau 
// dimodifikasi karena komponen-komponen tidak saling terikat secara langsung, tetapi menggunakan abstraksi yang diberikan oleh interface atau kontrak.
