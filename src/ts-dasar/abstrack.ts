// abstrack class yaitu sebuah class yang tidak bisa diistansiasi langsung dari luar class itu sendiri melainkan harus mengextends sebuah class kecilnya

abstract class Kendaraan {
    abstract wheels: number;

    start(): void {
        console.log("stututu")
    }
}

class Car extends Kendaraan {
    wheels: number = 4;
}

class Motorcycle extends Kendaraan {
    wheels: number = 2;
}

let car = new Car();
console.log(car.wheels);
car.start();

let motor = new Motorcycle();
console.log(motor.wheels);
motor.start();