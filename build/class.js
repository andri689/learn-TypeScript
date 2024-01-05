"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    //    public age: number;
    constructor(name, age) {
        this.getName = () => {
            return this.name;
        };
        //  constructor(name: string, public age: number) {
        this.name = name;
        //        this.age = age;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
//let user = new User("Andrian", 18); // output User { name: 'Andrian', age: 18 }
//let user = new User("Andrian", 18); // output User { age: 18, name: 'Andrian' }
//console.log(user); // output User { name: 'Andrian' }
//console.log(user.name)  // output Andrian
//
// public = bisa diakses di semua class / dari luar class
// protected = hanya bisa diakses dari class tersebut, dan class turunannya
// private = hanya bisa diakses class dari class itu sendiri
// class inheritance
// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;
//     getRole(): { read: boolean, write: boolean } {
//         return {
//             read: this.read,
//             write: this.write
//         };
//     };
// }
//let admin = new Admin('Andri', 20);
//console.log(admin.getName()); // Output: 'Andri'
//console.log(admin.getRole()); // Output: { read: true, write: true }
// admin.setName("Ada");
// console.log(admin.getName()); // Output: 'Ada'
// super constructor
// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;
//     phone: string;
//     constructor(phone: string, name: string, age: number) {
//         super(name, age);
//         this.phone = phone
//     }
//     getRole(): { read: boolean, write: boolean } {
//         return {
//             read: this.read,
//             write: this.write
//         };
//     };
// }
//let admin = new Admin("08999282277", 'Andri', 20);
// console.log(admin.getName()); // Output: 'Andri'
// console.log(admin.getRole()); // Output: { read: true, write: true }
// admin.setName("Ada");
// console.log(admin.getName()); // Output: 'Ada'
// console.log(admin.phone); // Output: '08999282277'
// set dan get
// set atau setter digunakan untuk validasi/validator ketika ingin mengubah properti yang ada pada class
// get atau getter digunakan untuk mengambil data pada sebuah class
// class Admin extends User {
//     read: boolean = true;
//     write: boolean = true;
//     phone: string;
//     private _email: string = ""; // ini properti kosong
//     constructor(phone: string, name: string, age: number) {
//         super(name, age);
//         this.phone = phone
//     }
//     getRole(): { read: boolean, write: boolean } {
//         return {
//             read: this.read,
//             write: this.write
//         };
//     };
//     set email(value: string) { // set untuk validasi data
//         if(value.length < 5) {
//             this._email = "Email salah";
//         } else {
//             this._email = value;
//         }
//     }
//     get email(): string { // get untuk mengambil data
//         return this._email;
//     }
// }
// let admin = new Admin("08999282277", 'Andri', 20);
// console.log(admin.getName()); // Output: 'Andri'
// console.log(admin.getRole()); // Output: { read: true, write: true }
// admin.setName("Ada");
// console.log(admin.getName()); // Output: 'Ada'
// console.log(admin.phone); // Output: '08999282277'
// // admin.email = 'admi'; // output Email salah salah karena hurunya kurang dari 5
// admin.email = "Admin@gmail.com";
// console.log(admin.email);
// static property dan static method
// property atau static method adalah sebuah property atau method yang bisa
// yang bisa diakses langsung dari dalam class itu sendiri tanpa perlu diinstansiasi terlebih dahulu
class Admin extends User {
    constructor(phone, name, age) {
        super(name, age);
        this.read = true;
        this.write = true;
        this._email = ""; // ini properti kosong
        this.phone = phone;
    }
    static getNameRole() {
        return "hai";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write
        };
    }
    ;
    set email(value) {
        if (value.length < 5) {
            this._email = "Email salah";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
Admin.getRoleName = "Admin";
//let admin = Admin.getRoleName; // hasil Admin
let admin = Admin.getNameRole(); // hasil hai
console.log(admin);
