alert
// office=prompt('insert your name')
// retirement=prompt('insert your age')
// if(retirement <65 && retirement>25){
//     console.log('you are ready to start working in a government office')
// }else if(retirement >=65){
//     console.log('you have reach the age limit to retire,please clear your desk and leave the goverment premises')
// }


var currentyear=prompt('the present year');
var yearofbirth=prompt('which year where you given birth to');
function subtractvalue(currentyear,yearofbirth){
    return currentyear-yearofbirth;
}
console.log(subtractvalue(currentyear,yearofbirth));