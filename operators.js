alert

//= means assignment

//operator are used in running the system
//operator in four element or group
//assignment(=,+=,-=,/=,*=,**=,%=)
var studentName="praise";
console.log(typeof(studentName));
//math(+,_,/,*,%,**,)
var num1=5
var num2=2
var add=num1+ num2
console.log(`addition of ${num1}+${num2}=${add}`)

var num3=6
var num4=7
var subtract= num3-num4
console.log(`subraction of ${num3}-${num4}=${subtract}`)

var num5=8
var num6=5
var divide= num5/num6
console.log(`division of ${num5}/${num6}=${divide}`)

var num7=9
var num8=10
var multiply= num7*num8
console.log(`multiply of ${num7}*${num8}=${multiply}`)

var num9=98
var num10=34
var exponent= num9**num10
console.log(`exponent of ${num9}**${num10}=${exponent}`)

//% is not percentage,but it is known as a module
var num11=67
var num12=89
var module= num11%num12
console.log(`modulus of ${num11}%${num12}=${module}`)


//comparison(==,!=,===,!==,<,<=,>,.=)
var age=20
console.log(`is 20 equal to 20: ${age==20}`)
console.log(`is 20 greater than 20:${age>20}`)
console.log(`is 20 less than 20:${age<20}`)
console.log(`is 20 greater than or equal to 20:${age>=20}`)
console.log(`is 20 less than or equal to 20:${age<=20}`)
console.log(`is 20 not equal to 20:${age!=20}`)

//logical(&,||)
//and will only be false when both are false
//or  will only be true when both  are true
var myName ='jess';
var myAge= 45;
console.log("---------------------- and ----------")
console.log(myName=='jess' && myAge==45)
console.log(myName=='banker' && myAge==45)
console.log(myName=='jess' && myAge==36)
console.log(myName=='gross' && myAge==47)
console.log("---------------------- or ----------")
console.log(myName=='jess' || myAge==45)
console.log(myName=='banker' || myAge==45)
console.log(myName=='jess'|| myAge==36)
console.log(myName=='gross' || myAge==47)