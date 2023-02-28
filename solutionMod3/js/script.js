var namesArray=["Sandhya","Pradeep","Uttangh","Neeha","John","jackie"];
for (i=0;i<namesArray.length;i++){
	if(namesArray[i].startsWith("j")||namesArray[i].startsWith("J")){
		console.log("Goodbye "+namesArray[i]);
	}
	else{
		console.log("Hello "+namesArray[i]);
	}
}