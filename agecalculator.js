alert
    
// function agecalc(){
//     currentyear=2024
//     var name=prompt('please enter your name')
//     var yearofbirth=prompt('please enter your yearofbirth')
//     age=currentyear-yearofbirth
//     console.log(`${name} is ${age} years old`)
// }
// agecalc()


// var current=new Date()
// var yearofbirth= prompt('which year where you born');
// var yearofemployment=prompt('which year where you employed')
// var serviceage=function(current,yearofemployment){
//     return current-yearofemployment
// };
// var age=function(current,yearofbirth){
//     return current-yearofbirth
// };
// var currentage =age(current,yearofbirth);
// var currentserviceage = serviceage(current, yearofemployment);
// if(currentage<65 && currentage>=25 && currentserviceage<35){
//     console.log('you are still eligble to work');
// }else if(currentage<25 && currentserviceage<=35){
//     console.log('you are not eligble to work yet');
// }else if(currentage<25 && currentserviceage>=35){
//     console.log('you are not eligble to work yet');
// }else if(currentage>=65 && currentserviceage>=35){
//     console.log('thank you for your addition to the organization but you are no longer needed');
// }else if(currentage<65 && currentserviceage>=35){
//     console.log('thank you for your addition to the organization but you are no longer needed');
// }else{
//     console.log('please refresh the page and fill in your information')
// };



//arrow function
/*
let form =function(a,a,...........,an){
    console.log
}
arrow  function=
let form=(a1, a2,a3,a4,...........,an)=>expression
*/
let sum =(m,n)=>m+n
console.log(typeof(sum))
console.log(sum(5,2))
add=function(a,b){
    return a+b
}
console.log(add(5,2))
let square =(x)=>x*2
console.log(square(8))