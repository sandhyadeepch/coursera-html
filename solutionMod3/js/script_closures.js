//Closures
// function makeMultipler(multiplier){
// 	//var multiplier=2;
// 	function b(){
// 		console.log("Mulitpler is:" + multiplier);
// 	}
// 	b();

// 	return (
// 		function(x){
// 			return multiplier*x;
// 		}


// 		);
// }

// var doubleAll=makeMultipler(2);
// console.log(doubleAll(10));//its own exec env

//Immediately Invoked Function Expression
//IIFE
// (function (name){
// 	console.log("Hello " +name);
// })("sandhya");

//Exposing local declaration outside of its scope using window object

(function(window){
	var myGreeter={};
	myGreeter.name="Sandhya";
	var greeting="Hi";
	myGreeter.sayHi=function(){
		console.log(greeting+myGreeter.name);

	}
	window.myGreeter=myGreeter;
})(window);




