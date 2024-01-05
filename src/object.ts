// Object

type User = {
    name: string,
    alamat: string,
    age: number
};
let user = {
    name: "Dewi",
    alamar: "Solo",
    age: 17
  //  sekolah: "SMK" // kenapa eror karena pada variable user sudah ditentukan mengunakan type User yang berisi 3 object dan sekolah tidak ada harus haeus di
                  // tambah terlebih dahulu
};

console.log(user)
