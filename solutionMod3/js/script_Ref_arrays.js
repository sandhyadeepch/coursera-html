//Copy by Ref vs Value
// var a=7;
// var b=a;
// console.log("a: "+ a);
// console.log("b: "+ b);

// b=5;
// console.log("after b update:");
// console.log("a: "+ a);
// console.log("b: "+ b);

// var a={x:7};
// var b=a;
// console.log(a);
// console.log(b);
// b.x=5
// console.log("after b.x update:");
// console.log(a);
// console.log(b);

//PAss by ref vs pass by value
// function changePrimitive(primValue) {
// 	console.log("in changePrimitive...");
// 	console.log("before:");
// 	console.log(primValue);

// 	primValue=5;
// 	console.log("after:");
// 	console.log(primValue);
// }

// var value=7;
// changePrimitive(value);//primValue=value
// console.log("after changePrimitive, orig value:");
// console.log(value);


// function changeObject(objValue){
// 	console.log("in changeObject...");
// 	console.log("before:");
// 	console.log(objValue);

// 	objValue.x=5;
// 	console.log("after:");
// 	console.log(objValue);
// }

// value={x:7};
// changeObject(value);
// console.log("after changeObject, orig value");
// console.log(value);

// function test(){
// 	console.log("Hello");
// 	console.log(this);
// 	this.myName="sandhya";
// }
// test();
// console.log(window.myName);

/**Function Constructors**/
// function Circle(radius){//fn constructor always use upper case
// 	//console.log(this);
// 	this.radius=radius;
// 	// this.getArea=function (){
// 	// 	return Math.PI*Math.pow(this.radius,2);
// 	// };
// }
// Circle.prototype.getArea=function (){
// 	return Math.PI*Math.pow(this.radius,2);
// }
// var myCircle=new Circle(10);//always use new keyword for funtion constructor.
// console.log(myCircle.getArea());

// var myOtherCircle=new Circle(20);
// console.log(myOtherCircle);

//Object literals and "this"
// var literalCircle={
// 	radius:10,
// 	getArea:function(){
// 		console.log(this);
// 		return Math.PI*Math.pow(this.radius,2);
// 	}
// };
// console.log(literalCircle.getArea());
//Arrays
// var array=new Array();
// array[0]="sandhya";
// array[1]="2";
// array[2]=function (name){
// 	console.log("Hello "+name);
// };
// array[3]={course: " HTML,CSS & JS"};
// console.log(array);
// //console.log(array[1]);
// array[2](array[0]);
// console.log(array[3].course);

//Short hand array creation
// var names=["sandhya", "rani", "marri"];
// //var names=[
// //{name:"sandhya"}, {name:"rani"}, "marri"];
// console.log(names);
// for (var i=0;i<names.length;i++){
// 	console.log("Hello "+names[i]);
// 	}

// names[100]="pradeep";

// for (var i=0;i<names.length;i++){
// 	console.log("Hello "+names[i]);
// 	}

var names2=["sandhya", "rani", "marri"];

// var myObj={
// 	name:"Sandhya",
// 	course:"HTML,CSS,JS",
// 	platform:"coursea"
// };
// for (var prop in myObj){
// 	console.log(prop + ":"+myObj[prop]);
// }

// for(var name in names2){
// 	console.log("Hello "+names2[name]);
// }
names2.greeting="Hi";

for(var name in names2){
	console.log("Hello "+names2[name]);
}//the property also be looped over in this for loop wven though we dont want it


























