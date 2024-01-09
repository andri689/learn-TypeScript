// Ketika kita menggunakan extends pada sebuah interface di TypeScript untuk memperluas interface tersebut dengan properti dan metode dari sebuah kelas, kita membuat sebuah interface yang mewarisi struktur dari kelas tersebut. 
// Kelas Animal yang memiliki properti name dan konstruktor untuk menginisialisasi nama hewan
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// Interface IShark yang memperluas (extends) kelas Animal dan menambahkan metode swim
interface IShark extends Animal {
    swim(): void; // Metode swim yang harus diimplementasikan oleh kelas yang mengimplementasikan interface ini
}

// Kelas Shark yang mengimplementasikan interface IShark
class Shark implements IShark {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    swim(): void {
        console.log('berenang');
    }
}

// Membuat objek dari kelas Shark
const shark = new Shark('Hiu');

// Mencetak informasi tentang objek Shark ke konsol
console.log(`Nama Hewan: ${shark.name}`);
shark.swim(); // Memanggil metode swim pada objek shark

// output
// Nama Hewan: Hiu
// berenang