// Namespace dalam TypeScript digunakan untuk mengelompokkan kelas, fungsi, variabel, atau tipe data lainnya di dalam satu ruang lingkup.

// Namespace NamespaceExample adalah sebuah ruang lingkup yang membungkus kelas Hewan dan variabel kodok.
namespace NamespaceExample {
    // Kelas Hewan adalah bagian dari namespace NamespaceExample.
    export class Hewan {
        // ...
    }

    // Variabel kodok adalah bagian dari namespace NamespaceExample.
    export const kodok = new Hewan(); // Membuat sebuah instance dari kelas Hewan.
}

// Membuat objek belalang dari kelas Hewan di dalam namespace NamespaceExample.
const belalang = new NamespaceExample.Hewan();
console.log(belalang); // Output: Instance dari kelas Hewan

// Mendeklarasikan variabel kodok2a yang merujuk pada variabel kodok di dalam namespace NamespaceExample.
let kodok2a = NamespaceExample.kodok;
console.log(kodok2a); // Output: Instance dari kelas Hewan (yang sama dengan variabel kodok di dalam namespace)
