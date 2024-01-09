// interface ini merupakan sebuah perjanjian atau kontrak yang mana semua properti atau metode yang sudah disepakati di dalam interface itu harus diimplementasikan kepada kelas yang mengunakan interface tersebut
// karena interface adalah antarmuka

// Interface AndroidPhone yang menetapkan fungsi dasar yang harus dimiliki oleh ponsel Android
interface AndroidPhone {
    name: string;
    menu(): void;
    home(): void;
    back(): void;
}

// Kelas Samsung yang mengimplementasikan interface AndroidPhone
class Samsung implements AndroidPhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    menu(): void {
        console.log('menu tapped');
    }

    home(): void {
        console.log('home tapped');
    }

    back(): void {
        console.log('back tapped');
    }
}

// Kelas Opo yang juga mengimplementasikan interface AndroidPhone
class Opo implements AndroidPhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    menu(): void {
        console.log('menu tapped');
    }

    home(): void {
        console.log('home tapped');
    }

    back(): void {
        console.log('back tapped');
    }
}

// Kelas GameA yang memiliki metode yang bergantung pada objek ponsel Android
class GameA {
    private phone: AndroidPhone;

    constructor(phone: AndroidPhone) {
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

// Interface ApplePhone yang menentukan fungsi dasar yang harus dimiliki oleh ponsel Apple
interface ApplePhone {
    home(): void;
}

// Kelas IPhone yang mengimplementasikan interface ApplePhone
class IPhone implements ApplePhone {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    home(): void {
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
