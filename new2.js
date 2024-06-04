alert 
//you can also use message to console.log it
//message=`$ {myName} please put your name
//the console.log at the ending is to console.log everything at once
var myName=prompt(`enter your name`)
var myAge=prompt(`enter your age`)
switch(true){
 case myAge<9:
        console.log(`${myName} .please wait till you are of age `)
        break;

        case myAge>=9 && myAge<=11:
        console.log(`${myName} .you are in red house `)
        break;

        case myAge>=12 && myAge<=14:
        console.log(`${myName} .you are in yellow house `)
        break;

        case myAge>=15 && myAge<=17:
        console.log(`${myName} .you are in blue house `)
        break;

        case myAge>=18 && myAge<=19:
        console.log(`${myName} .you are in  greenhouse `)
        break;

        case myAge>19:
        console.log(`${myName} .your mate no dey here `)
        break;

        default:
            console.log('we dey expel people bros no misbehave ')
}