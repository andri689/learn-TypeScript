// static property dan static method yang ada pada kelas ini merupakan property atau method yang dia menempel pada kelas itu sendiri jadi bukan pada objek yang nantinya sudah dihasilkan

// Definisi kelas Ayam
class Ayam {
    static kaki = 2; // Properti statis kaki diinisialisasi dengan nilai 2

    // Metode statis untuk mencetak jumlah kaki ayam
    static jalan() {
        console.log(`ayam berjalan dengan ${this.kaki} kaki`);
    }

    // Metode untuk mendapatkan jumlah kaki ayam
    getKaki() {
        // console.log(this.kaki)
        console.log(Ayam.kaki); // Mengakses properti statis kaki dari kelas Ayam
    }
}

// Memanggil metode statis jalan() dari kelas Ayam dan mencetak jumlah kaki ayam
console.log(Ayam.jalan());

// Membuat objek ayam2 dari kelas Ayam
const ayam2 = new Ayam();
ayam2.getKaki(); // Mencetak jumlah kaki ayam menggunakan metode getKaki()

// Membuat beberapa objek baru ayam3, ayam4, dan ayam5 dari kelas Ayam
const ayam3 = new Ayam();
console.log(ayam3.getKaki()); // Mencetak jumlah kaki ayam menggunakan metode getKaki()
const ayam4 = new Ayam();
console.log(ayam4.getKaki()); // Mencetak jumlah kaki ayam menggunakan metode getKaki()
const ayam5 = new Ayam();
console.log(ayam5.getKaki()); // Mencetak jumlah kaki ayam menggunakan metode getKaki()

// Mengubah nilai properti statis kaki dari kelas Ayam menjadi 4
Ayam.kaki = 4;

// Mencetak jumlah kaki ayam untuk ayam3, ayam4, dan ayam5 setelah perubahan nilai kaki
console.log(ayam3.getKaki());
console.log(ayam4.getKaki());
console.log(ayam5.getKaki());

// output
// ayam berjalan dengan 2 kaki
// undefined
// 2
// 2
// undefined
// 2
// undefined
// 2
// undefined
// 4
// undefined
// 4
// undefined
// 4
// undefined