// interface pada sebuah class

interface Laptop {
    name: string;
    on(): void;
    off(): void;
}

class Asus implements Laptop {
    name: string;
    isGaming: boolean;

    constructor(name: string, isGaming: boolean) {
        this.name = name;
        this.isGaming = isGaming;
    }
    on(): void {
        console.log('nyala')
    }
    off(): void {
        console.log('mati')
    }
}

class MacBook implements Laptop {
    name: string;
    keyboardLight: boolean;

    constructor(name: string, keyboardLight: boolean) {
        this.name = name;
        this.keyboardLight = keyboardLight;
    }
    on(): void {
        console.log('nyala')
    }
    off(): void {
        console.log('mati')
    }
}

let asus = new Asus('Asus', true);
console.log(asus.on()); // Memanggil fungsi on() untuk laptop Asus
console.log(asus.off()); // Memanggil fungsi off() untuk laptop Asus

let Mac = new MacBook('MacBook', true);
console.log(Mac.on()); // Memanggil fungsi on() untuk MacBook
console.log(Mac.off()); // Memanggil fungsi off() untuk MacBook
