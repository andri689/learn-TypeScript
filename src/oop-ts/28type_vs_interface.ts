// Perbedaan antara 'type' dan 'interface' di TypeScript:

// 1. Ketika membuat 'type', kita bisa mendefinisikan alias untuk tipe data yang sudah ada.
// Misalnya, 'Phone' dan 'pc' adalah alias untuk tipe data yang sudah ada, seperti string dan number.
// Sedangkan 'PC' adalah bentuk struktur baru yang didefinisikan secara langsung untuk tipe objek.
type Phone = string;
type pc = number;

type PC = {
    name: string
    pc: number
}

// Interface memungkinkan kita untuk mendefinisikan struktur objek yang baru.
// 'AAAA' adalah interface yang mendefinisikan struktur objek dengan properti Phone dan pc.
interface AAAA {
    Phone: string
    pc: number
}

// 2. Interface dapat digabungkan (merged), artinya dua atau lebih interface dengan nama yang sama dapat digabungkan.
// Ini memungkinkan penambahan properti baru pada interface yang sudah ada.
// Namun, 'type' tidak mendukung penggabungan, mengakibatkan error saat mendefinisikan ulang tipe yang sama.
interface Dino {
    name: string
}

interface Dino {
    weight: number;
}

// Saat mengimplementasikan sebuah interface dalam class, class tersebut harus mengimplementasikan semua properti yang didefinisikan dalam interface.
// Ketika menggunakan 'type', mendefinisikan ulang tipe yang sama akan menghasilkan error.
class Dinosaurus implements Dino {
    name: string;
    weight: string; // Error: Properti 'weight' yang didefinisikan dalam interface harus sesuai tipe yang diharapkan.
}

// 'type' bisa digunakan untuk membuat tipe data baru dengan melakukan operasi seperti intersection (&) atau union (|).
// Contoh Employee1 dan Employee2 menunjukkan bagaimana 'type' dapat digunakan untuk menggabungkan atau memilih tipe data.
type Name = {
    name: string
}

type Age = {
    age: number
}

type Employee1 = Name & Age; // Hasil dari penggabungan dua tipe data menjadi satu.
type Employee2 = Name | Age; // Hasil dari pilihan antara dua tipe data.

// pakailah interface jika ingin membuat sebuah objek baru / ketika kalian membuat class itu cocoknya memakai interface
// dan pakailah type jika ingin membuat sebuah variable / function

// Kapan menggunakan 'type' atau 'interface':
// - Interface lebih cocok untuk mendefinisikan struktur objek baru atau saat membuat class yang membutuhkan implementasi properti.
// - Type lebih cocok untuk membuat alias dari tipe data yang sudah ada, atau untuk melakukan operasi terhadap tipe data, seperti union atau intersection.
// - Saat membuat objek baru atau class, lebih disarankan menggunakan 'interface'.
// - Saat membuat variabel atau fungsi, 'type' dapat digunakan untuk membuat alias dari tipe data yang sudah ada.
