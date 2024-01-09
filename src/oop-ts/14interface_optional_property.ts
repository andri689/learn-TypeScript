// dengan optional properti di interface kita bisa mengabaikan properti pada interface yang bersifat opsional

// Interface Teacher yang mendefinisikan struktur data untuk objek Teacher
interface Teacher {
    name: string;   // Nama dari seorang guru (string)
    age: number;    // Usia dari seorang guru (number)
    phone: string;  // Nomor telepon dari seorang guru (string)
}

// Mendefinisikan objek teacher sesuai dengan struktur dari interface Teacher
let teacher: Teacher = { name: 'Andrian', age: 17, phone: '7489147812'};

// Mencetak informasi tentang objek teacher ke konsol
console.log(`Nama: ${teacher.name}`);
console.log(`Usia: ${teacher.age}`);
console.log(`Nomor Telepon: ${teacher.phone}`);

// output
// Nama: Andrian
// Usia: 17
// Nomor Telepon: 7489147812 