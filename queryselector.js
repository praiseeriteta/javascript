// document.querySelector('#demo').Style.color='blue'
// document.querySelector('#demo').Style.backgroundcolor='pink'
// document.querySelector('#fasting').Style.color='greenyellow'
// document.querySelector('#fasting').Style.backgroundcolor='blue'
// document.querySelector('#death').Style.color='blue'
// document.querySelector('#death').Style.backgroundcolor='biege'
// document.querySelector('#spiderman').Style.color='white'
// document.querySelector('#spiderman').Style.backgroundcolor='black'


//document.queryselectorAll('h1')[0].style.color='yellow'
let x=document.querySelectorAll('h1')
for (i=0; i<x.length; i++){
    x[i].style.color='red'
}
for (i=0; i<x.length; i++){
    x[i].style.backgroundColor='yellow'
}
let y=document.querySelectorAll('P')
for (i=0; i<y.length; i++){
    y[i].style.color='blue'
}