//string concatination//
// var string="Hello";
// string+=" world";
// string=string+" world";
// console.log(string + "!");

//regualr math operators//
// console.log((5+4)/3);
// console.log(undefined/5);
// function test1(a){
// 	console.log(a/5);
// }
// test1();

//***Equality***/
 //var x=4,y=4;
// if(x==y){
// 	console.log("x=4 is equal to y=4");
// }
// x="4";
// if(x==y){
// 	console.log("x='4' is equal to y=4");
// }

// ****strict Equality**** //
// if(x===y){
// 	console.log("strict:x='4' is equal to y=4");
// }
// else{
// 	console.log("strict:x='4' is NOT equal to y=4");
// }



//****** IF statement (all false)

// if(false||null||undefined||""||0||NaN){
// 	console.log("This line wont ever execute");
// }
// else{
// 	console.log("All False");
// }

// // ****** If statement (All True)
// if(true && "hello" && 1 && -1 &&"false"){
// 	console.log("All true");
// }



// *** Best practice for {} style
//Curly brace on the same or next line..
//is it just a style?
// function a()
// {
// 	return
// 	{
// 		name:"sandhya"
// 	};
// }
// function b(){
// 	return{
// 		name:"sandhya"
// 	};
// }
// console.log(a());
// console.log(b());

// ** For loop **
// var sum=0;
// for(var i=0;i<10;i++){
// 	console.log(i);
// 	sum=sum+i;
// }
// console.log("sumof 0 through 9 is:" + sum);


//***Default Values
// function orderWith(sideDish){
// 	sideDish=sideDish || "anything!";
// 	console.log("Chicken with " + sideDish);
// }
// orderWith("rice");
// orderWith();

//**returns two hello worlds
// var x = 10;
// if ( (null) || (console.log("Hello")) || x > 5 ) {
//   console.log("Hello");
// }

/**Object Creation****/
// var company=new Object();
// company.name="Facebook";
// company.ceo=new Object();
// company.ceo.firstName="Mark";
// company.ceo.favColor="blue";
// console.log(company);
// console.log("FB ceo name is "+ company.ceo.firstName);
// console.log(company["name"]);

/**Better way  :Object literal***/
// var facebook={
// 	name:"Facebook",
// 	ceo:{
// 		firstName:"Mark",
// 		faveColor:"blue"
// 	},
// 	//$stock:110
// 	"stock of company":110
// };
// console.log(facebook);
// console.log(facebook.ceo.firstName);


//Functions are first-class data types
//Functions are objects
// function multiply(x,y){
// 	return x*y;
// }
// multiply.version="v.1.0.0";
// console.log(multiply.version);

// //Function factory
// function makeMultipler(multiplier){
// 	var myFunc=function(x){
// 		return multiplier * x;
// 	};
// 	return myFunc;
// }

// var multiplyBy3=makeMultipler(3);
// console.log(multiplyBy3(10));
// var doubleAll=makeMultipler(2);
// console.log(doubleAll(100));


// //PAssing functions as arguments
// function doOperationOn(x,operation){
// 	return operation(x);
// }

// var result=doOperationOn(5,multiplyBy3);
// console.log(result);
// result=doOperationOn(100,doubleAll);
// console.log(result);















