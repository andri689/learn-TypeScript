"use strict";
// abstrack class yaitu sebuah class yang tidak bisa diistansiasi langsung dari luar class itu sendiri melainkan harus mengextends sebuah class kecilnya
class Kendaraan {
    start() {
        console.log("stututu");
    }
}
class Car extends Kendaraan {
    constructor() {
        super(...arguments);
        this.wheels = 4;
    }
}
class Motorcycle extends Kendaraan {
    constructor() {
        super(...arguments);
        this.wheels = 2;
    }
}
let car = new Car();
console.log(car.wheels);
car.start();
let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();
