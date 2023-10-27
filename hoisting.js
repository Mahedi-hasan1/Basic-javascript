// variable hoisting---------------------------------------
console.log(hoistingintro);
var hoistingintro = "Hi i am Mahedi Hasan";

//console.log(xx); 
let xx = 5;
 
console.log(xx); // Uncaught ReferenceError: x is not defined
const x = 5;
 
console.log(x); // undefined
//var x = 5;

//function hoisting------------------------------------

fun1();
function fun1(){
    console.log("Hi Mahedi Hasan");
}


//----------------------

var hoistingIntro = "Hi there, I am a string one.";
function hoistingFunc() {
	console.log(hoistingIntro); // undefine
	var hoistingIntro = "Hi there, I am a string two";
	console.log(hoistingIntro); //Hi there, ....
}

hoistingFunc();