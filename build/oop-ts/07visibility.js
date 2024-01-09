"use strict";
// visibility atau juga disebut sebagai akses modivier ini digunakan untuk mengatur dan membatasi akses dari prperty atau method yang ada pada sebuah class
// ada 3 macam visibility :
// public
// protected adalah property yang masih bisa dipanggil selama itu masih di dalam class itu sendiri atau class turunannya 
// private adalah property yang hanya bisa diakses di dalam class itu sendiri seperty contoh tersebut di class Hewan7 dan class turunannya tidak dapat mengaksesnya
// jadi fungsi dari visibility adalah misal ada sebuah class yang mana property dimana client tidak boleh melihat apa saja yang ada atau tidak boleh mengakses propety maka property dapat dibuat sebagai private
class Hewan7 {
    constructor(nama, kaki, mamalia) {
        this.nama = nama;
        this.kaki = kaki;
        this.mamalia = mamalia;
    }
    berjalan() {
    }
}
class Katak7 extends Hewan7 {
    constructor() {
        //jadi konsepnya adalah pada class Katak7 ini kita ingin menyembunyikan ketiga property yang ada karena kita merasa bahwa client tak perlu tahu apa isi dari property tersebut
        super(...arguments);
        this.umurTelur = 4;
        this.umurKecebong = 7;
        this.umurKatak = 90;
    }
    // jadi mereka hanya tahu method ini atau seperty contoh ini yaitu getUmur()
    // maka ketika mengakses getUmur maka mereka mendapatkan semua penjumlahan dari property Katak7
    getUmur() {
        console.log(this.umurTelur + this.umurKecebong + this.umurKatak);
        // this.mamalia
        // this.kaki // ini akan eror karena private
    }
}
const katak7 = new Katak7('Jon', 4, false);
katak7.getUmur(); // Akan mencetak hasil penjumlahan umur: 101
// katak7.umurTelur ini tidak ada karena disembunyikan dari dunia luar dan yang tampil hanya getUmur() 
