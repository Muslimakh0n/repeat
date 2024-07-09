// {
//     var a =10
//     let b = 20
//     const c = 30

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }


//   console.log(a)
//     console.log(b)
//     console.log(c)


// function x() {
//     for (let i =1; i <= 5; i++) {
//         setTimeout(function(){
//             console.log(i);

//         }, i * 1000)
       
        
//     }
//     console.log("Hiiiiiiii");
// } 

// x()

// clouser example

// function x() {
//     for (var i = 1; i <=5; i++) {
//         function close(x) {
//             setTimeout(function () {
//                 console.log(x);
//             }, x*1000);
//         };
//         close(i)
        
//     }

//     console.log("smile :)");
// }

// x();


// clouser example

// function parent(){
//      var number = 12;      

//      function child(){
//            console.log(number);
//      }
//      child();    // 12
// }

// let count = (function(){
//   let counter = 0;
//   return function(){ 
//     return counter += 1; 
//   }
// })();

// count();   // 1
// count();   // 2
// count();   // 3



//  let x = 10; 

// function example() {
//     let x = 20; 
//     console.log(x); 
// }

// example();
// console.log(x); 

// function parent(){
//      var number = 12;      

//      function child(){
//            console.log(number);
//      }
//      child();    // 12
// }

// parent()


// typeof operatori orqali ma'lumot turini aniqlanadi
typeof 'some text' // string
typeof 10 // number
typeof false // boolean

// lekin bu siz o'ylaganlachik oson emas
typeof function(){} // function (JavaScriptda function ma'lumot turi yo'q)
typeof null // object (null aslida null turiga kiradi)
typeof NaN // number (NaN - not a number)
typeof String // function


// string

// oddiy holatlar
typeof "Jur'atbek" // string
typeof String("Jur'atbek") // string
typeof String(123) // string
typeof String({}) // string

// chalg'itadigan holatlar
typeof new String("Jur'atbek") // object (chunki new String orqali yaratilganda 
                               // aslida ham abyekt qaytaradi)
typeof String // function (String funksiyasining tipini qaytarmoqda)


// number

// oddiy holatlar
typeof 123 // number
typeof Number(123) // number
typeof Number('string') // number
typeof Number({}) // number
typeof Infinity // number

// chalg'itadigan holatlar
typeof NaN // number
// 0 yoki Infinity'ga bo'lganda typeof operatori NaN qaytaradi
typeof 0/0 // NaN
typeof 1/0 // NaN
typeof 0/Infinity // NaN
typeof Infinity/Infinity // NaN
typeof -Infinity/Infinity // NaN
// 0 yoki Infinity'ni bo'lganda ham typeof operatori NaN qaytaradi
typeof 0/1 // NaN
typeof Infinity/1 // NaN

typeof (typeof Infinity/0) // number (typeof NaN -> number)
typeof (Infinity/1) // number
typeof (0/1) // number

// bigint

// oddiy holatlar
typeof 123n // bigint
typeof BigInt(123) // bigint
typeof BigInt(123n) // bigint
typeof BigInt('string') // Uncaught SyntaxError: Cannot convert string to a BigInt

// chalg'itadigan holatlar
typeof new BigInt(123) // Uncaught TypeError: BigInt is not a constructo
typeof 12n/12n // Uncaught TypeError: Cannot mix BigInt and other types, use explicit conversions
// qisqasi bigint katta extimol bilan xatolik chiqaradi 😄

// boolean

// oddiy holatlar
typeof false // boolean
typeof Boolean('string') // boolean

// chalg'itadigan holatlar
typeof new Boolean('string') // object

// symbol

// oddiy holatlar
typeof Symbol(123) // symbol

// chalg'itadigan holatlar
typeof new Symbol(123) // Uncaught TypeError: Symbol is not a constructor

// object

// oddiy holatlar
typeof {} // object
typeof Object() // object
typeof new Object() // object
// array, set va map ham object turiga kiradi
typeof [] // object
typeof Array() // object
typeof new Map() // object