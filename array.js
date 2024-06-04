alert
// the two achieve thesame purpose but this [] allows it to add more characters in it 
var friends=["yuno","asta","sister mary","peace"];
friends.push("captain yami,")
friends.unshift("vermillon")
friends.pop();
friends.shift();
console.log(typeof(friends));
//we can use push to add to a variables in order to extend it to add to the end 
//to add to the starting we use unshift
//to remove from the character from the end we use pop
//we use shift to remove from the begnning
console.log(friends)
console.log(friends[1].toUpperCase())

//contactination is the joining of two variables together  
var family=["tega","ochuko","sage"];
// console.log(typeof(friends));
var relationship=friends+family;
console.log(relationship)
//we can add two bracket in a console.log for it to print it 
var nummbers=[30,"html",45,"variables",38,"fishing",67,["nba funds","kodak","davinci"],"animals",87,"bookstrans"]
console.log((nummbers));
console.log(nummbers[7][1]);

var list=[1,2,['a','b',['cat','dog','go'],'js','php'],'abj','eua']
console.log(list);
console.log(list[2][2][1])

var friends=["destiny","john","champion","feels","gress"]
for(var i=0; i<friends.length; i++){
    console.log(`${friends[i].toUpperCase()} is my coding friend`)
}



var party=['destiny','john','champion','feels','gress']
party.push('davinci','ten')
console.log(party)
for(var i=party.length; i>=0; i--){
    console.log(`${party[i]} is my coding friend`)
}
// is called concactnation is the art of joining two or more character together
//the backtick is call template literal 
// another way to do it we can use console.log(student.name)
var student={
    'name':'praise',
    'age':6777,
    'course': 'js'
}
console.log(`${student['name'] } is ${student['age']} years old and studying is ${student['course']}`)
console.log(student.name,' is ',student.age ,' years old ','  and studying ',student.course )
console.log(student.name + `is ` + student.age+  `years old  and studying` +  student.course  )
console.log(`${student.name} is ${student.age} years old  and studying ${student.course}`)

