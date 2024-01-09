"use strict";
// Kelas Civic yang mengimplementasikan interface ICar
class Civic {
    constructor() {
        this.name = 'Civic'; // Menginisialisasi properti name untuk Civic
        this.wheels = 4; // Menginisialisasi properti wheels untuk Civic
        this.doors = 4; // Menginisialisasi properti doors untuk Civic
    }
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
