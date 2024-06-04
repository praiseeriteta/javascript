alert

//using if,else if and else create a basic house app that assign a housing to student based on their age bracket it 
//group a 9-11 years old red house
//group b 12-14 years old yellow house
//group c 15-17 years old green house 
//group d 18 -19 years old blue house

var studentName=prompt('please enter your name')
var studentAge=prompt('please enter your age')
if(studentAge<9){
    console.log(`${studentName} disembark from this place`)
}else if(studentAge>=9 && studentAge <=11){
    console.log(`${studentName} you are in Red house`)
}else if(studentAge >=12 && studentAge<=14){
    console.log(`${studentName} you are in Yellow house`)
}else if(studentAge >=15  && studentAge<=17){
    console.log(`${studentName} you are in Green house`)
}else if(studentAge >=18 && studentAge<=19){
    console.log(`${studentName} you are in blue house`)
}else if(studentAge>19){
    console.log(`${studentName} your mate no dey here`)
}
//use switch to do redo it

