"use strict";
// Enum sebuah tipe data untuk menyimpan sebuah data konstan
// numeric enums
// enum Month {
//    JAN, 
//    JAN = 1, // contoh fitur ini  akan mengeluarkan output bila dipanggil  console.log(Month.JAN); hasil 1 karena array yang dimulai 0 berubah menjadi 1 atau index dimulai dari 1
//    FEB,
//    FEB = 10,
//     MAR,
//     APR,
//     MAY,
//     JUN,
//     JUL
// }
//console.log(Month)
//console.log(Month.JAN); // hasil 0 karena array dimulai dari 0
//console.log(Month.MAR); // hasil 11 karena mengikuti index dari FEB = 10,
// contoh hasil JAN = 1 dan FEB = 10
// {
//     '1': 'JAN',
//     '10': 'FEB',
//     '11': 'MAR',
//     '12': 'APR',
//     '13': 'MAY',
//     '14': 'JUN',
//     '15': 'JUL',
//     JAN: 1,
//     FEB: 10,
//     MAR: 11,
//     APR: 12,
//     MAY: 13,
//     JUN: 14,
//     JUL: 15
//   }
//   11
// String enums
var Month;
(function (Month) {
    Month["JAN"] = "JANUARI";
    Month["FEB"] = "FEBRUARI";
    Month["MAR"] = "MARET";
    Month["APR"] = "APRIL";
    Month["MAY"] = "MEI";
})(Month || (Month = {}));
console.log(Month);
console.log(Month.APR);
// Hasil
// {
//     JAN: 'JANUARI',
//     FEB: 'FEBRUARI',
//     MAR: 'MARET',
//     APR: 'APRIL',
//     MAY: 'MEI'
//   }
//   APRIL
