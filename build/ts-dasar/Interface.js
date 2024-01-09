"use strict";
// interface pada sebuah class
class Asus {
    constructor(name, isGaming) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on() {
        console.log('nyala');
    }
    off() {
        console.log('mati');
    }
}
class MacBook {
    constructor(name, keyboardLight) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on() {
        console.log('nyala');
    }
    off() {
        console.log('mati');
    }
}
let asus = new Asus('Asus', true);
console.log(asus.on()); // Memanggil fungsi on() untuk laptop Asus
console.log(asus.off()); // Memanggil fungsi off() untuk laptop Asus
let Mac = new MacBook('MacBook', true);
console.log(Mac.on()); // Memanggil fungsi on() untuk MacBook
console.log(Mac.off()); // Memanggil fungsi off() untuk MacBook
