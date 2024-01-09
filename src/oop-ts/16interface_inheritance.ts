// Interface Venchile yang mendefinisikan struktur dasar kendaraan dengan properti name dan wheels
interface Venchile {
    name: string;   // Nama kendaraan (string)
    wheels: number; // Jumlah roda kendaraan (number)
}

// Interface ICar yang meng-extends (memperluas) dari interface Venchile dengan menambahkan properti doors
interface ICar extends Venchile {
    doors: number; // Jumlah pintu kendaraan (number)
}

// Kelas Civic yang mengimplementasikan interface ICar
class Civic implements ICar {
    name: string = 'Civic';   // Menginisialisasi properti name untuk Civic
    wheels: number = 4;       // Menginisialisasi properti wheels untuk Civic
    doors: number = 4;        // Menginisialisasi properti doors untuk Civic
}

// Membuat objek dari kelas Civic
const civicCar = new Civic();

// Mencetak informasi tentang objek Civic ke konsol
console.log(`Nama Kendaraan: ${civicCar.name}`);
console.log(`Jumlah Roda: ${civicCar.wheels}`);
console.log(`Jumlah Pintu: ${civicCar.doors}`);

// output
// Nama Kendaraan: Civic
// Jumlah Roda: 4
// Jumlah Pintu: 4
