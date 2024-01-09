// return type pada sebuah method berfungsi untuk membatasi atau mengatur tipe apa yang akan didirikan sebuah method

class Burung {
    private kaki: number = 2; // Properti kaki dengan nilai default 2

    // Metode untuk mendapatkan jumlah kaki burung
    getKaki() {
        return this.kaki; // Mengembalikan nilai properti kaki
    }

    // Metode untuk menggambarkan aksi terbang burung
    terbang(): void {
        console.log('terbang'); // Mencetak 'terbang' ke konsol
    }

    // Metode async makan yang mengembalikan Promise dengan nilai number
    async makan(): Promise<number> {
        return 54321; // Mengembalikan nilai 54321 sebagai Promise<number>
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

