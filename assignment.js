alert
//function take an age parameter which represent the student age
function gamehouse(age) {
    if (age >=9 && age<=11){
        return"red house";
    }else if (age >=12 && age <= 14){
        return"yellow house";
    }else if (age >= 15 && age <= 17){
        return "green house";
    }else if (age >= 18 &&  age <=19){
        return "blue house";
    }else{
        return "invalid age";
    }
}
console.log(gamehouse(11));
console.log(gamehouse(13));
console.log(gamehouse(16));
console.log(gamehouse(18));
console.log(gamehouse(7));