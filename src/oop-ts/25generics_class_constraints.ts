// pengertian
// Generic class constraints dalam TypeScript adalah cara untuk membatasi jenis tipe data yang dapat digunakan saat mendefinisikan sebuah generic 
// class. Dengan menggunakan constraints, Anda dapat menetapkan pembatasan atau persyaratan tambahan terkait tipe data yang dapat digunakan sebagai 
// argumen generic. Constraints ini memungkinkan Anda untuk menegaskan bahwa tipe data yang digunakan dalam generic class harus memenuhi kriteria 
// tertentu, seperti memiliki properti atau method tertentu, sehingga membantu membuat implementasi generic class menjadi lebih spesifik dan terarah.

// Interface Product mendefinisikan sebuah kontrak dengan method sell yang harus diimplementasikan oleh kelas-kelas lain.
interface Product {
    sell(): void;
}

// Kelas CarProduct mengimplementasikan interface Product dengan mengonkretkan method sell untuk menjual mobil.
class CarProduct implements Product {
    sell(): void {
        console.log('jual Mobil');
    }
}

// Kelas MotorProduct mengimplementasikan interface Product dengan mengonkretkan method sell untuk menjual motor.
class MotorProduct implements Product {
    sell(): void {
        console.log('jual Motor');
    }
}

// Fungsi sellProducts adalah generic function yang menerima array dari tipe T yang diperluas dengan interface Product.
// Constraints <T extends Product> memastikan bahwa array yang diterima hanya berisi objek dengan struktur seperti Product.
// Fungsi ini menggunakan forEach untuk menjalankan method sell dari setiap objek dalam array.
function sellProducts<T extends Product>(products: T[]): void {
    products.forEach(product => product.sell());
}

// Membuat objek CarProduct dan MotorProduct.
const car1 = new CarProduct();
const motor1 = new MotorProduct();

// Memanggil sellProducts dengan array yang berisi objek CarProduct dan MotorProduct.
sellProducts([car1, motor1]);

// output 
// jual Mobil
// jual Motor
