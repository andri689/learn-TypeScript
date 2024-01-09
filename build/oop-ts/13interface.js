"use strict";
// interface ini merupakan sebuah perjanjian atau kontrak yang mana semua properti atau metode yang sudah disepakati di dalam interface itu harus diimplementasikan kepada kelas yang mengunakan interface tersebut
// karena interface adalah antarmuka
// Kelas Samsung yang mengimplementasikan interface AndroidPhone
class Samsung {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log('menu tapped');
    }
    home() {
        console.log('home tapped');
    }
    back() {
        console.log('back tapped');
    }
}
// Kelas Opo yang juga mengimplementasikan interface AndroidPhone
class Opo {
    constructor(name) {
        this.name = name;
    }
    menu() {
        console.log('menu tapped');
    }
    home() {
        console.log('home tapped');
    }
    back() {
        console.log('back tapped');
    }
}
// Kelas GameA yang memiliki metode yang bergantung pada objek ponsel Android
class GameA {
    constructor(phone) {
        this.phone = phone;
    }
    back() {
        console.log('kembali ke menu utama di game');
    }
    menu() {
        this.phone.menu();
    }
    home() {
        this.phone.home();
    }
}
// Membuat objek Samsung dan menggunakannya dalam objek GameA
const samsung = new Samsung('Tipe A');
const game = new GameA(samsung);
game.home(); // Output: home tapped
game.back(); // Output: kembali ke menu utama di game
game.menu(); // Output: menu tapped
// Kelas IPhone yang mengimplementasikan interface ApplePhone
class IPhone {
    constructor(name) {
        this.name = name;
    }
    home() {
        console.log('muncul global');
    }
}
// Membuat objek IPhone dan menggunakannya dalam objek GameA
const iphone = new IPhone('IPhone 13');
//const game2 = new GameA(iphone); // ini eror karena yang diinginkan cuma Android
// Melakukan panggilan metode pada objek game2 yang menggunakan IPhone
//game2.home(); // Output: muncul global
// output 
// home tapped
// kembali ke menu utama di game
// menu tapped
// muncul global
// sehingga sudah jelas bahwa kegunaan interface ini adalah untuk sebagai antarmuka dan juga untuk mengenali apakah parameter ini sudah 
// cocok dengan apa yang diminta oleh properti ini atau bukan 
