"use strict"
document.getElementById('head').style.color='red'
document.getElementById('body').style.color='green'



function submitform(){
    let surname=document.getElementById('surname');
    let name=document.getElementById('name')
    let email=document.getElementById('email')
    let password=document.getElementById('password')
    if (surname.value.length<5){
        console.log('ERROR')
    }else{
        console.log(surname.value);
    }
    if (surname.value.length<5){
        console.log('ERROR')
        surname.style.borderColor='red';
    }else{
        surname.style.borderColor='green';
    }if(name.value.length<5){
        console.log('ERROR')
        name.style.borderColor='red'
    }else{
        console.log(name.value);
        name.style.borderBlock='green'
    }
    if(password.value<8){
        console.log('Check password again')
        password.style.borderColor='red'
    }else{
        console.log('logged-in')
        password.style.borderColor='green'
    }
    console.log(email.value);
    return false;
}