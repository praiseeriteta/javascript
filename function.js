alert
//function can be defined as creating something f
//two type of function 
//built-in function
//e.g alert,prompt,if,console.log
//custom function 
//e.g  declarative,call back or arrow function
/*declarative
with parameter
without parameter
with return
with scope
*/

//syntax for declarative function
/*function name(){
    output
}
calling/invoke
*/
function add(){
    console.log(5+2)
}
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
add()
//function helps us to do dry
//dry means do not repeat yourself
//argument or parameter
function studentInformation(){
    var name=`john`
    var course= `js`
    console.log(`${name} is studying ${course}`)
}
studentInformation()

function studentInfo2( name,course){
    console.log(`${name} is studying ${course}`)
}
studentInfo2( 'john','python')
studentInfo2( 'gane','coding')
studentInfo2( 'baspsita','Sql')
studentInfo2( 'henry','APH')
studentInfo2( 'race','near')
studentInfo2( 'grace','js')
studentInfo2( 'java','home economic')
// studentInfo2()


//when you dont pass anything in the student it turn into a default value 
function studentData(name= 'john', age=20){
    console.log(`${name} is ${age} years old`)
}
studentData('john',50)
studentData('bruce',70)
studentData('peter',30)
studentData('take',23)
studentData('son',30)
studentData()


//syntax
//return the value back with result
function addValue(a,b){
    return a+b
}
addValue(5,3)
console.log( addValue(5,3))

result=addValue(5,3)
console.log(result+7)
                          
function times(a){
    return a*3
}
console.log(times(7))
