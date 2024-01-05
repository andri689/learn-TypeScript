import Asus from "./Asus";
import MacBook from "./MacBook";

let asus = new Asus("Zenbook", true, true);
console.log(asus);

let macbook = new MacBook(2017, false, false);
console.log(macbook)
macbook.a();
macbook.b();

//output
// Asus {
//     name: 'Asus',
//     type: 'Zenbook',        
//     withNumeric: true,      
//     withTouchButton: true   
//   }
//   MacBook {
//     name: 'MacBook',        
//     type: 2017,
//     withNumeric: false,     
//     withTouchButton: false  
//   }
//   a
//   b