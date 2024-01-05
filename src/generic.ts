// generic merupakan tipe data yang dinamis
function getData(value: any) {
    return value;
}

console.log(getData("Andri").lenght);//output dari jumlah huruf Andri adalah 5 dan apabila tidak ada .lenght output berupa Andri
console.log(getData(1234).lenght); //angka tidak bisa dikasih .lenght dan hasilnya apabila ditak ada .lenght 1234

// generic 
// untuk solusi di atas adalah dengan ini

function myData<T>(value: T) {
    return value
}
console.log(myData("Andri").length); // output 5
console.log(myData(123));// output 123

const arrowfunc =  <T, >(value: T) => {

}