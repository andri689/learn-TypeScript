// Type Generics2<T> adalah sebuah tipe yang didefinisikan sebagai T. Ini akan mengembalikan nilai dari T saat digunakan.
type Generics2<T> = T;

// Function genericsFunction2 adalah sebuah generic function yang menerima nilai dari tipe T dan mengembalikan nilai dari tipe T.
function genericsFunction2<T>(value: T): Generics2<T> {
    return value;
}

// Memanggil genericsFunction2 dengan tipe data string ('string') dan mencetak nilai yang dikembalikan ke konsol.
console.log(genericsFunction2<string>('string'));
