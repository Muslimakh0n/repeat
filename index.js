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

function x() {
    for (var i = 1; i <=5; i++) {
        function close(x) {
            setTimeout(function () {
                console.log(x);
            }, x*1000);
        };
        close(i)
        
    }

    console.log("smile :)");
}

x();


// clouser example

function parent(){
     var number = 12;      

     function child(){
           console.log(number);
     }
     child();    // 12
}

let count = (function(){
  let counter = 0;
  return function(){ 
    return counter += 1; 
  }
})();

count();   // 1
count();   // 2
count();   // 3