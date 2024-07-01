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


function x() {
    for (let i =1; i <= 5; i++) {
        setTimeout(function(){
            console.log(i);

        }, i * 1000)
       
        
    }
    console.log("Hiiiiiiii");
} 

x()