
//Event handling for greeting name.txt contents on button click
document.addEventListener("DOMContentLoaded",
	function(event){
		// function sayHello(event){
		// 	console.log(event);
		// 	this.textContent="Said it!";
		// 	var name=document.getElementById("name").value;
		// 	var message="<h2>Hello "+name+"!</h2>";
		// 	document.getElementById("content").innerHTML=message;
		// 	if(name==="student"){
		// 		var title=document.querySelector("#title").textContent;
		// 		title+= " & Learning it!";
		// 		document.querySelector("h1").textContent=title;
		// 	}
		// }
		// //UnObstructive event binding
		// document.querySelector("button").addEventListener("click",sayHello);
		// //document.querySelector("button").onclick=sayHello;

		// document.querySelector("body").addEventListener("mousemove",
		// 	function(event){
		// 		if(event.shiftKey===true){
		// 			console.log("x: "+event.clientX);
		// 			console.log("y: "+event.clientY);
		// 		}
		// 	}
		// );

		//Unobstructive event binding
		document.querySelector("button").addEventListener("click",function(){

			//call server to get the name
			// $ajaxUtils.sendGetRequest("/Data/name.txt",function(request){
			// 	var name=request.responseText;
			// 	document.querySelector("#content").innerHTML="<h4>Hello "+name+"! How are you guys?</h4>";
			// });
			$ajaxUtils.sendGetRequest("/Data/name.json",function(res){
				var message=res.firstName+" "+res.lastName;
				if(res.likesIndianFood){
					message+=" likes Indian food!!";
				}
				else
				{
					message+=" doesn't like Indian food!!";
				}
				message+=" and uses "+(res.noOfDisplays+1)+" displays for coding" ;
				document.querySelector("#content").innerHTML="<h2>"+message+"</h2>";
			});
		});
	}
);



