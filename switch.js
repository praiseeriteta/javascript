alert
//syntaX(condition){
//case1 output;break;
//case2 output;break;
//case3 output;break;
//default 1 output;break}
var myName=prompt(`enter your name`)
switch(myName){
    case 'henry':
    console.log('student');
    //break;
//break is use to terminate or stop the condition from running
    case 'abraham':
    console.log('teacher');
    break;

    case 'grecce':
    console.log('programmer');
    break;
//break are use to stop it once the condition is made
//default are serve as else  
    case 'mark':
    console.log('drug addict')
    break;

    case 'jerry':
    console.log('fisherman')
    break;

    default:
    console.log('who are you');
    break;
}
