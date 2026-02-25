var x = 0

console.log("do while loop")
do{
    console.log(x)
    x = x + 1
}while(x<11)

console.log("for loop") 
var m
for(m=0;m<=3;m++){
    console.log(m)
}

console.log("Alert messages")
var a=0
if(a!=0){
    alert("Game is still on!")
}
else{
    console.log("Game over")
}

console.log("Arrays in JS")
var names = ['Bhoomi','Bindu','Ravi','Abhi','Harshitha','Veda']
console.log(names)

console.log(names.length)

for(var i=0; i<names.length;i++){
    console.log(names[i])
}

//console.log(names[3])

console.log("String Operations")
var name = 'Manjuli Kumari'
console.log(name.length)


var z = name.slice(0,7)
console.log(z)

