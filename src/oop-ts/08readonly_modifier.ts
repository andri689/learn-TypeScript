// readonly modifier ini digunakan agar suatu property tidak bisa diubah datanya atau ini bisa dipanggil imutable
class Person {
    readonly gender: string = 'Pria';
}

const person = new Person();

//person.gender = 'Wanita'; kenapa eror karena sudah diseting gendenya adalah pria dan tidak bisa diubah

// Catatan !!!!!
// perbedaan readonly dengan const
// const hanya bisa digunakan pada variable biasa seperti ini :
// const a = 'apa';
// const b = 123456;
// sedangkan readonly itu hanya bisa digunakan untuk property didalam class 

