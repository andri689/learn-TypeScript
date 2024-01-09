"use strict";
// Mendefinisikan objek student yang sesuai dengan struktur dari interface Student
let student = { name: 'Andri', age: 29 };
// Mencetak informasi tentang objek student ke konsol
console.log(`Nama Siswa: ${student.name}`);
console.log(`Usia Siswa: ${student.age}`);
// Kode di bawah ini akan menyebabkan kesalahan (error) karena properti 'phone' tidak didefinisikan dalam interface Student
// let murid: Student = { phone: '841789' }; // kode ini akan eror
// Menambahkan informasi tambahan tentang kesalahan yang terjadi ke konsol
// console.error("Error: Object literal may only specify known properties, and 'phone' does not exist in type 'Student'.");
// output 
// Nama Siswa: Andri
// Usia Siswa: 29
// Error: Object literal may only specify known properties, and 'phone' does not exist in type 'Student'.  
