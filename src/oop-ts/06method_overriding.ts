// method overriding berfungsi untuk mereplace atau menggantikan method yang sudah ada di parent classnya

class Hewan6 {
    name: string = '';

    bernafas() {
        console.log('sedang bernafas');
    }
}

class Katak6 extends Hewan6 {
    bernafas() {
        console.log('malas bernafas');
    }
}

const katak6 = new Katak6();
katak6.bernafas();

// seperti contoh class Hewan6 di atas dapat disimpulkan bahwa
// yang mana punya method yang sama dengan parentnya seperti contoh diatas yaitu method bernafas
// maka yang program yang berjalan hanya method yang anak sedangkan parentnya dihiraukan/diabaikan 
// dan hasil dari output di atas adalah malas bernafas dan apa bila method anaknya dihilangkan maka hasilnya adalah sedang bernafas