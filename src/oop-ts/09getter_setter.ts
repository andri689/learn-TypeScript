// getter dan setter dipakai untuk mengambil dan mengisi sebuah property dalam class yang mena sebelum melakukan get atu set itu ada beberapa
// proses yang diperlukan terlebih dahulu sebelum disimpan kedalam prperty

class ProductA {
    private _price: number = 0; // Inisialisasi harga produk
    private discount: number = 0.05; // Inisialisasi besaran diskon (5%)

    get price() { // Getter untuk mendapatkan nilai harga produk
        return this._price;
    }

    set price(value: number) { // Setter untuk mengubah nilai harga produk
        this._price = value - (value * this.discount); // Menghitung harga setelah diskon dan disimpan di _price
    }
}

const productA = new ProductA(); // Membuat objek baru dari kelas ProductA
productA.price = 2000; // Mengatur harga produk menjadi 2000
console.log(productA.price); // output 1900 - Mencetak nilai harga produk setelah diskon
